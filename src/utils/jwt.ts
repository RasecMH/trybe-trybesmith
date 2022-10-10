import jwt from 'jsonwebtoken';
import HttpError from './http.error';
import { User } from './interfaces';

export const createToken = async (payload: User) => jwt.sign(payload, 'MinhaSenhaSecreta', {
  expiresIn: '1d',
  algorithm: 'HS256',
});

export const validateToken = async (token: string) => {
  if (!token) throw new HttpError(403, 'unauthorized');

  try {
    return jwt.verify(token, 'MinhaSenhaSecreta');
  } catch (error) {
    if (error instanceof Error) {
      throw new HttpError(401, error.message);
    }
  }
};
