import express from 'express';
import OrdersController from '../controllers/orders.controller';
import validateOrdersFields from '../middlewares/validateOrdersFields';
import validateTokenMiddleware from '../middlewares/validateToken';

const ordersRouter = express.Router();
const productController = new OrdersController();
ordersRouter.get('/', productController.getAll);
ordersRouter.post('/', validateTokenMiddleware, validateOrdersFields, productController.create);

export default ordersRouter;
