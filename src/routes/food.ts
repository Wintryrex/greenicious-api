import express from 'express';
import FoodService from './../services/food';
import HttpError from '../util/http-error';
import error from '../util/error-message';
import tryCatchHandler from '../middlewares/trycatch-handler';
import foodSchema from '../schemas/food';

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
    let status = 200;
    const service: FoodService = req.app.get('foodService');
    const result = await service.get(req.params.id);
    if (result === null) {
      status = 404;
    }
    res.status(status).send(result);
  })
);

router.post(
  '/',
  tryCatchHandler(async (req, res) => {
    const validate = foodSchema.safeParse(req.body);
    if (!validate.success) {
      throw new HttpError(error.wrongInput.message, error.wrongInput.code);
    }
    const service: FoodService = req.app.get('foodService');
    const result = await service.add(validate.data);
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
    let code = 204;
    const validate = foodSchema.safeParse(req.body);
    if (!validate.success) {
      throw new HttpError(error.wrongInput.message, error.wrongInput.code);
    }
    const service: FoodService = req.app.get('foodService');
    const result = await service.update(req.params.id, validate.data);
    if (result === null) {
      code = 404;
    }
    res.sendStatus(code);
  })
);

router.delete(
  '/:id',
  tryCatchHandler(async (req, res) => {
    let code = 204;
    const service: FoodService = req.app.get('foodService');
    const result = await service.delete(req.params.id);
    if (result === null) {
      code = 404;
    }
    res.sendStatus(code);
  })
);

export default router;
