import { Request, Response } from 'express';
import { createToken } from '../utils/jwt';
import UsersService from '../services/Users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public insert = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    
    const newUser = await this.usersService.insert(username, classe, level, password);
    const token = await createToken({ id: newUser.id });
    res.status(201).json({ token });
  };
}