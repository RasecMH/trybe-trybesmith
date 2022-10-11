import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../utils/jwt';

const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    const userId = await validateToken(authorization);
    req.body.userId = userId;
    return next();
  } catch (error) {
    next(error);
  }
};

export default validateTokenMiddleware;