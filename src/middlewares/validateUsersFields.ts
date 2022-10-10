import { NextFunction, Request, Response } from 'express';
import { userSchema } from '../utils/joiSchemas';
import { ErrorObj } from '../utils/interfaces';
import errorList from '../utils/errorList';
import HttpError from '../utils/http.error';

const validateUsersFields = (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  const { error } = userSchema.validate(payload);
  if (error) {
    const { status, message } = (errorList as Record<string, ErrorObj>)[error.message];
    throw new HttpError(status, message);
  } 
  next();
};

export default validateUsersFields;