import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../utils/interfaces';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [results] = await this.connection.execute<RowDataPacket[]>(`
        SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId,
        JSON_ARRAYAGG(Trybesmith.Products.id) AS productsIds
        FROM Trybesmith.Orders INNER JOIN Trybesmith.Products
        ON Trybesmith.Orders.id = Trybesmith.Products.orderId
        GROUP BY Trybesmith.Orders.id
        ORDER BY Trybesmith.Orders.userId
      `);
    return results as Order[];
  }

  public async insert(userId: number): Promise<number> {    
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders(userId) VALUES (?)', [userId]);

    return insertId;
  }

  public async update(productId: number, orderId: number) {
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productId],
    );
  }
}
