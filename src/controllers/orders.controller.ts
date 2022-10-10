import { Request, Response } from 'express';
import OrdersService from '../services/Orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getAll = async (req: Request, res: Response) => {
    const products = await this.ordersService.getAll();
    res.status(200).json(products);
  };
}