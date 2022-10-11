import { Request, Response } from 'express';
import { createToken } from '../utils/jwt';
import LoginService from '../services/Login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    const payload = await this.loginService.login(username, password);
    const token = await createToken({ id: payload.id, 
      username,
      classe: payload.classe,
      level: payload.level });
    res.status(200).json({ token });
  };
}