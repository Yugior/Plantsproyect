import { z } from "zod";

export const PlantSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  temp_ambiente_dia_min: z.string().regex(/^\d$/, {
    message:
      "La sección temp_ambiente_dia_min debe ser 'Número' (por ejemplo, '5')",
  }),

  temp_ambiente_dia_max: z.string().regex(/^\d$/, {
    message:
      "La sección temp_ambiente_dia_max debe ser 'Número' (por ejemplo, '5')",
  }),
  temp_ambiente_noche_min: z.string().regex(/^\d$/, {
    message:
      "La sección temp_ambiente_noche_min debe ser 'Número' (por ejemplo, '5')",
  }),
  temp_ambiente_noche_max: z.string().regex(/^\d$/, {
    message:
      "La sección temp_ambiente_noche_max debe ser 'Número' (por ejemplo, '5')",
  }),
  temp_suelo_min: z.string().regex(/^\d$/, {
    message: "La sección temp_suelo_min debe ser 'Número' (por ejemplo, '5')",
  }),
  temp_suelo_max: z.string().regex(/^\d$/, {
    message: "La sección temp_suelo_max debe ser 'Número' (por ejemplo, '5')",
  }),
});
