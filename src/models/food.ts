import { Schema, model } from 'mongoose';
import Product from '../types/food';

const schema = new Schema<Product>(
  {
    title: { type: String, required: true },
    ingrediens: { type: String, required: true },
    stores: { type: [String], required: true },
    measurement: {
      unit: { type: String, required: true },
      amount: { type: Number, required: true },
    },
  },
  { autoCreate: true }
);

const Food = model<Product>('Food', schema);

export default Food;
