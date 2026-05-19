import { z } from 'zod';

export const FigurinhaSchema = z.object({
  id: z.uuid(),
  numero: z.number(),
  codigo: z.string(),
  status: z.enum(['FALTA', 'REPETIDA', 'TENHO']),
  selecao_id: z.uuid(),
});

export type Figurinha = z.infer<typeof FigurinhaSchema>;
