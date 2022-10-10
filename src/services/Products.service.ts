import { Product } from '../utils/interfaces';
import connection from '../models/connection';
import ProductModel from '../models/Products.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async insert(name: string, amount: string): Promise<Product> {
    return this.model.insert(name, amount);
  }
}
