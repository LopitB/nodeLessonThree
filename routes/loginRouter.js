const {Router} = require('express');

const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/orAllEntered');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginMiddleware, loginController.emailAudit);

module.exports = loginRouter;


