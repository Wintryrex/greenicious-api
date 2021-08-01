import express from 'express';
import FoodService from './../services/food';
import Food from '../types/food';

const router = express.Router();

router.get('/', async (req, res) => {
  const service: FoodService = req.app.get('foodService');
  const result = await service.getAll();
  res.send(result).status(200);
});

router.get('/name/:name', async (req, res) => {
  const service: FoodService = req.app.get('foodService');
  const result = await service.search(req.params.name);
  res.send(result).status(200);
});

router.get('/:id', async (req, res) => {
  const service: FoodService = req.app.get('foodService');
  const result = await service.get(req.params.id);
  res.send(result).status(200);
});

router.post('/', async (req, res) => {
  const item: Food = {
    title: req.body.title,
    stores: req.body.stores,
    ingrediens: req.body.ingrediens,
    measurement: {
      unit: req.body.measurement.unit,
      amount: req.body.measurement.amount,
    },
  };
  const service: FoodService = req.app.get('foodService');
  const result = await service.add(item);
  if (!result._id) {
    throw new Error('Id not found');
  }
  const location = req.originalUrl + result._id;
  res.set('Location', location).send(result).status(201);
});

router.put('/:id', async (req, res) => {
  const item: Food = {
    title: req.body.title,
    stores: req.body.stores,
    ingrediens: req.body.ingrediens,
    measurement: {
      unit: req.body.measurement.unit,
      amount: req.body.measurement.amount,
    },
  };
  const service: FoodService = req.app.get('foodService');
  await service.update(req.params.id, item);
  res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
  const service: FoodService = req.app.get('foodService');
  await service.delete(req.params.id);
  res.sendStatus(204);
});

export default router;
