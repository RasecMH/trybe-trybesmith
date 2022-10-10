import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  public async getAll(): Promise<Product[]> {
    const [results] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return results as Product[];
  }
}
