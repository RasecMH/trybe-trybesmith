import connection from '../models/connection';
import UsersModel from '../models/Users.model';
import HttpError from '../utils/http.error';

export default class LoginService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async login(username: string, password: string) {
    const user = await this.model.get(username, password);
    if (!user) throw new HttpError(401, 'Username or password invalid');
    
    return user;
  }
}
