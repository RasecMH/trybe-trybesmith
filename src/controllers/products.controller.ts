import { Request, Response } from 'express';
import ProductService from '../services/Products.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public insert = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const newProduct = await this.productService.insert(name, amount);
    res.status(201).json(newProduct);
  };
}