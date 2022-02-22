const {Router} = require('express');

const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/orAllEntered');

const loginRouter = Router();

loginRouter.get('/', loginMiddleware,loginController.renderLogin);
loginRouter.post('/', loginController.emailAudit);

module.exports = loginRouter;


