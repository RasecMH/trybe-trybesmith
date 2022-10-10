import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../utils/interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insert(name: string, amount: string): Promise<Product> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, name, amount };
  }
}
