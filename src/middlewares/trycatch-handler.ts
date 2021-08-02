import { Request, Response, NextFunction, RequestHandler } from 'express';

const tryCatchHandler = (
  action: (req: Request, res: Response) => void
): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await action(req, res);
    } catch (err) {
      next(err);
    }
  };
};

export default tryCatchHandler;
