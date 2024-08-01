
// all the imports here
import { z } from "zod";

// create bike schema validation
const createBikeValidationSchema = z.object({
    body: z.object({
        name: z.string().trim(),
        description: z.string().trim(),
        pricePerHour: z.number(),
        cc: z.number(),
        year: z.number(),
        model: z.string().trim(),
        brand: z.string().trim(),
        isAvailable: z.boolean().optional().default(true),
        isDeleted: z.boolean().optional().default(false),
    }),
});


// update bike schema validation
const updateBikeValidationSchema = z.object({
    body: z.object({
        name: z.string().trim().optional(),
        description: z.string().trim().optional(),
        pricePerHour: z.number().optional(),
        cc: z.number().optional(),
        year: z.number().optional(),
        model: z.string().trim().optional(),
        brand: z.string().trim().optional(),
        isAvailable: z.boolean().optional(),
        isDeleted: z.boolean().optional(),
    }),
});


// export bike validation schema
export const bikeValidationSchema = {
    createBikeValidationSchema,
    updateBikeValidationSchema,
};