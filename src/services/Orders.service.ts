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
}
