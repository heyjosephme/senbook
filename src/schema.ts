import { z } from "zod";

export const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  issuedDate: z.date(),
  dueDate: z.date(),
  client: z.object({
    name: z.string().min(1, "Client name is required"),
    address: z.string().min(1, "Client address is required"),
    email: z.string().email().optional(),
  }),
  items: z.array(z.object({
    description: z.string().min(1, "Description is required"),
    quantity: z.number().min(1),
    unitPrice: z.number().min(0),
    amount: z.number().min(0),
  })).min(1, "At least one item is required"),
  subtotal: z.number().min(0),
  taxRate: z.number().min(0),
  taxAmount: z.number().min(0),
  total: z.number().min(0),
  currency: z.enum(["JPY", "USD", "EUR"]),
  notes: z.string().optional(),
  paymentTerms: z.string().optional(),
});

export type InvoiceFormData = z.infer<typeof invoiceSchema>;
