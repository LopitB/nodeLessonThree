const users = require("../db/users");
let error = require("../db/error");

class signInController {
    renderSignIn(request, response) {
        response.render('signIn');
    }

    emailAndPasswordAudit(request, response) {
        const emailAndPasswordAudit = users.find(user => user.email === request.body.email && user.password === request.body.password);

        if (!emailAndPasswordAudit) {

            error = `User ${request.body.email} not found! Please try again`;
            response.redirect('/error');

            return;
        }
        response.redirect(`/users/${emailAndPasswordAudit.id}`);
    }
}

module.exports = new signInController();