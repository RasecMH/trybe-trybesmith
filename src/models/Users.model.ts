import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User } from '../utils/interfaces';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insert(
    username: string,
    classe: string, 
    level: number, 
    password: string,
  ): Promise<User> {
    console.log(username, classe, level, password);
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, username, classe, level };
  }

  public async get(username:string, password:string) {
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return user as User;
  }
}
