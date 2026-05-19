import { z } from 'zod';

export const SelecaoSchema = z.object({
  id: z.uuid(),
  nome: z.string(),
  sigla: z.string().max(3),
  cor_bg: z.string(),
  cor_fg: z.string(),
  grupo_id: z.uuid(),
});

export type Selecao = z.infer<typeof SelecaoSchema>;
