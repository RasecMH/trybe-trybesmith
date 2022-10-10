import { User } from '../utils/interfaces';
import connection from '../models/connection';
import UsersModel from '../models/Users.model';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async insert(
    username: string,
    classe: string, 
    level: number, 
    password: string,
  ): Promise<User> {
    return this.model.insert(username, classe, level, password);
  }
}
