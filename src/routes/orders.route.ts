import express from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRouter = express.Router();
const productController = new OrdersController();
ordersRouter.get('/', productController.getAll);

export default ordersRouter;
