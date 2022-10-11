import express from 'express';
import LoginController from '../controllers/login.controller';
import validateLoginFields from '../middlewares/validateLoginFields';

const loginRouter = express.Router();
const loginController = new LoginController();
loginRouter.post('/', validateLoginFields, loginController.login);

export default loginRouter;
