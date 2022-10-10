import express from 'express';
import httpErrorMiddleware from './middlewares/errorMiddleware';
import productsRouter from './routes/products.route';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use(httpErrorMiddleware);

export default app;
