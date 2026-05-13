import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("عنوان بريد إلكتروني غير صالح"),

  password: z
    .string()
    .min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل"),
});

export type LoginFormData = z.infer<typeof loginSchema>;