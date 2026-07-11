import status from "http-status"
import { prisma } from "../lib/prisma"
import type { TCreateAvailabilityPayload } from "../types"
import { AppError } from "../utils"

const getAvailability = async (technician_id: string) => {
    const result = await prisma.technicianAvailability.findMany({
        where: { technician_id },
    })

    if (!result || result.length === 0) {
        throw new AppError(status.NOT_FOUND, "No availability found for this technician")
    }

    return result
}

const setAvailability = async (technician_id: string, payload: TCreateAvailabilityPayload) => {

    const data = payload.availability.map((slot) => {
        return {
            technician_id,
            ...slot
        }
    })

    const result = await prisma.$transaction(async (tx) => {
        // Clear out any existing schedule for this specific technician
        await tx.technicianAvailability.deleteMany({
            where: { technician_id },
        });

        // Insert the brand new 7-day snapshot
        const createdRecords = await tx.technicianAvailability.createMany({
            data,
        });

        return createdRecords;
    })

    return result
}

export const availabilityService = { getAvailability, setAvailability }