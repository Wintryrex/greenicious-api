import 'dotenv/config';
import express from 'express';
import food from './routes/food';

const app = express();
const port = process.env.PORT || 3000;

app.use('/food', food);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
