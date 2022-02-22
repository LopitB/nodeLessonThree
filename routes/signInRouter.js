const {Router} = require('express');

const signInController = require('../controllers/signInController');
const signInMiddleware = require('../middleware/isUserValid');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);
signInRouter.post('/', signInMiddleware, signInController.emailAndPasswordAudit);

module.exports = signInRouter;