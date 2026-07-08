import { prisma } from "../lib/prisma"
import type { TCreateAvailabilityPayload } from "../types"

const getAvailability = async () => {
    const result = await prisma.technicianAvailability.findMany()

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