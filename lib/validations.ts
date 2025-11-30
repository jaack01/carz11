import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const carSearchSchema = z.object({
  year: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  mileage: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  type: z.enum(["sale", "rent"]).optional(),
});

export const callbackRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CarSearchData = z.infer<typeof carSearchSchema>;
export type CallbackRequestData = z.infer<typeof callbackRequestSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
