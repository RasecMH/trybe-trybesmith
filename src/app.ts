import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/errorMiddleware';
import ordersRouter from './routes/orders.route';
import productsRouter from './routes/products.route';
import usersRouter from './routes/users.route';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

app.use(httpErrorMiddleware);

export default app;
