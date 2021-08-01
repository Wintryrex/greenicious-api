import 'dotenv/config';
import './loaders/mongoose';
import express from 'express';
import food from './routes/food';
import FoodService from './services/food';

const app = express();
const port = process.env.PORT || 3000;
const foodService = new FoodService();

app.set('foodService', foodService);
app.use(express.json());
app.use('/food', food);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
