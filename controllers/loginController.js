const users = require("../db/users");
let error = require("../db/error");

class loginController {
    renderLogin(request, response) {
        response.render('login');
    }

    emailAudit(request, response) {
        const emailAudit = users.some(user => user.email === request.body.email);

        if (emailAudit) {

            error = 'User with this email exist!';
            response.redirect('/error');

            return;
        }
        users.push({...request.body, id: users.length ? users[users.length - 1].id + 1 : 1});
        response.redirect('/users');
    }
}

module.exports = new loginController();
