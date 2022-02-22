let users = require("../db/users");
let error = require("../db/error");

class userController {
    filteredAndRenderUsers(request, response) {
        if (Object.keys(request.query).length) {

            let filteredUsers = [...users];

            if (request.query.city) {
                filteredUsers = filteredUsers.filter(user => user.city === request.query.city);
            }

            if (request.query.age) {
                filteredUsers = filteredUsers.filter(user => user.age === request.query.age);
            }

            if (request.query.city && request.query.age) {
                filteredUsers = filteredUsers.filter(user =>
                    user.age === request.query.age &&
                    user.city === request.query.city
                )
            }
            response.render('users', {users: filteredUsers});
            return;
        }
        response.render('users', {users});
    }

    getUserById(request, response) {
        const user = users.find(user => user.id === +request.params.userId);

        if (!user) {

            error = `User ${request.params.userId} not found! Please try again`;
            response.redirect('/error');

            return;
        }
        response.render('user', {user});
    }

    deleteUserById(request, response) {
        const {userId} = request.params;
        users = users.filter(user => user.id !== +userId);

        response.redirect('/users');
    }
}

module.exports = new userController();
