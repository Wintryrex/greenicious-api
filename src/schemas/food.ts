import { z } from 'zod';
import Food from '../types/food';

const foodSchema: z.ZodSchema<Food> = z.lazy(() =>
  z
    .object({
      title: z.string(),
      ingrediens: z.string(),
      stores: z.array(z.string()),
      measurement: z.object({
        unit: z.string(),
        amount: z.number(),
      }),
    })
    .strict()
);

export default foodSchema;
