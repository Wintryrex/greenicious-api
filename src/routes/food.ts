import express from 'express';
import FoodService from './../services/food';
import Food from '../types/food';
import HttpError from '../util/http-error';
import error from '../util/error-message';
import tryCatchHandler from '../middlewares/trycatch-handler';

const router = express.Router();

router.get(
  '/',
  tryCatchHandler(async (req, res) => {
    const service: FoodService = req.app.get('foodService');
    const result = await service.getAll();
    res.status(200).send(result);
  })
);

router.get(
  '/name/:name',
  tryCatchHandler(async (req, res) => {
    const service: FoodService = req.app.get('foodService');
    const result = await service.search(req.params.name);
    res.status(200).send(result);
  })
);

router.get(
  '/:id',
  tryCatchHandler(async (req, res) => {
    const service: FoodService = req.app.get('foodService');
    const result = await service.get(req.params.id);
    res.status(200).send(result);
  })
);

router.post(
  '/',
  tryCatchHandler(async (req, res) => {
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
      throw new HttpError(error.idNotExist.message, error.idNotExist.code);
    }
    const location = req.originalUrl + result._id;
    res.set('Location', location).status(201).send(result);
  })
);

router.put(
  '/:id',
  tryCatchHandler(async (req, res) => {
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
  })
);

router.delete(
  '/:id',
  tryCatchHandler(async (req, res) => {
    const service: FoodService = req.app.get('foodService');
    await service.delete(req.params.id);
    res.sendStatus(204);
  })
);

export default router;
