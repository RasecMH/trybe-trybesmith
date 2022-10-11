import { Request, Response } from 'express';
import OrdersService from '../services/Orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getAll = async (req: Request, res: Response) => {
    const products = await this.ordersService.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds, userId } = req.body;

    await this.ordersService.create(productsIds, userId.id);
    return res.status(201).json({ userId: userId.id, productsIds });
  };
}