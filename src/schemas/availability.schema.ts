import { z } from 'zod'
import { Weekdays } from '../prisma/generated/prisma/enums';
import { timeToMinutes } from '../utils';

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
const timeSchema = z.string().regex(timeRegex, {
    message: 'Time must be in HH:mm format (e.g. 09:30).',
});

const technicianAvailabilitySchema = z
    .object({
        weekday: z.enum(Weekdays),

        start_time: timeSchema.nullable(),

        end_time: timeSchema.nullable(),
    })
    .refine(
        (data) =>
            (data.start_time === null && data.end_time === null) ||
            (data.start_time !== null && data.end_time !== null),
        {
            error: "Both start_time and end_time must be provided or both must be null."
        }
    ).refine((data) => {
        if (!data.start_time || !data.end_time) return true;
        return timeToMinutes(data.start_time) < timeToMinutes(data.end_time)
    },
        {
            error: "start_time must be earlier than end_time.",
        }
    );

export const createAvailabilitySchema = z.object({
    availability: z
        .array(technicianAvailabilitySchema)
        .length(7, "Exactly seven weekdays are required.")
        .refine(
            (availabilityArr) => {
                const weekdaysSet = new Set(availabilityArr.map((item) => item.weekday));
                return weekdaysSet.size === availabilityArr.length;
            },
            {
                message: "Each weekday must appear exactly once in the schedule template.",
            }
        ),
});


export type TCreateAvailabilityPayload = z.infer<typeof createAvailabilitySchema>