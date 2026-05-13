import { z } from "zod";

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

export const validate = <T>(
    schema: z.ZodSchema<T>,
    data: unknown
): {
    success: true;
    data: T;
} | {
    success: false;
    errors: ValidationErrors<T>;
} => {
    const result = schema.safeParse(data);

    if (!result.success) {
        const errors: ValidationErrors<T> = {};

        result.error.issues.forEach((issue) => {
            const key = issue.path[0] as keyof T;
            errors[key] = issue.message;
        });

        return {
            success: false,
            errors,
        };
    }

    return {
        success: true,
        data: result.data,
    };
};