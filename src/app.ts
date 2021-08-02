import 'dotenv/config';
import './loaders/mongoose';
import express from 'express';
import food from './routes/food';
import FoodService from './services/food';
import errorHandler from './middlewares/error-handler';

const app = express();
const port = process.env.PORT || 3000;
const foodService = new FoodService();

app.set('foodService', foodService);
app.use(express.json());
app.use('/food', food);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
