import { Order } from '../utils/interfaces';
import connection from '../models/connection';
import OrdersModel from '../models/Orders.model';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    return this.model.getAll();
  }

  public async create(productsIds: number[], userId: number) {
    const orderId = await this.model.insert(userId);
    await Promise.all(productsIds.map((id) => this.model.update(id, orderId)));
  }
}
