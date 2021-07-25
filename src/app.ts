import 'dotenv/config';
import express from 'express';
import products from './routes/products';

const app = express();
const port = process.env.PORT || 3000;

app.use('/products', products);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
