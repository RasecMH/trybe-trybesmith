import express from 'express';
import UsersController from '../controllers/users.controller';
import validateUsersFields from '../middlewares/validateUsersFields';

const usersRouter = express.Router();
const usersController = new UsersController();
usersRouter.post('/', validateUsersFields, usersController.insert);

export default usersRouter;
