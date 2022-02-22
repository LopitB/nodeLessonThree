const {Router} = require('express');

const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', userController.filteredAndRenderUsers);
userRouter.get('/:userId', userController.getUserById);

module.exports = userRouter;


