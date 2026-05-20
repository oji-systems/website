import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(120, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(254, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
  website: z.string().max(0, "Invalid submission"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const contactFieldErrorsSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  message: z.string().optional(),
});
