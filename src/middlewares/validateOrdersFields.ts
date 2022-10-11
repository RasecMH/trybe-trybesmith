import { NextFunction, Request, Response } from 'express';
import { orderSchema } from '../utils/joiSchemas';
import { ErrorObj } from '../utils/interfaces';
import errorList from '../utils/errorList';
import HttpError from '../utils/http.error';

const validateOrdersFields = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = orderSchema.validate({ productsIds });
  
  if (error) {
    const { status, message } = (errorList as Record<string, ErrorObj>)[error.message];
    throw new HttpError(status, message);
  } 
  next();
};

export default validateOrdersFields;