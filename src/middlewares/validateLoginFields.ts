import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../utils/joiSchemas';
import { ErrorObj } from '../utils/interfaces';
import errorList from '../utils/errorList';
import HttpError from '../utils/http.error';

const validateLoginFields = (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  const { error } = loginSchema.validate(payload);
  if (error) {
    const { status, message } = (errorList as Record<string, ErrorObj>)[error.message];
    throw new HttpError(status, message);
  } 
  next();
};

export default validateLoginFields;