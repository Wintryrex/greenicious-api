import { ErrorRequestHandler } from 'express';
import HttpError from '../util/http-error';
import error from '../util/error-message';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(error.serverError.code).send(error.serverError.message);
  }
  console.error(err);
};

export default errorHandler;
