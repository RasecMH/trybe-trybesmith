import express from 'express';
import ProductController from '../controllers/products.controller';
import validateProductsFields from '../middlewares/validateProductsFields';

const productsRouter = express.Router();
const productController = new ProductController();
productsRouter.post('/', validateProductsFields, productController.insert);

export default productsRouter;
