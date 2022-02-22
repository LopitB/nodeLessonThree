const {Router} = require('express');

const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRouter');
const errorRouter = require('./errorRouter');

const errorController = require('../controllers/errorController')

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);
routes.use('/error', errorRouter);

routes.use(errorController.renderNotFound);

module.exports = routes;
