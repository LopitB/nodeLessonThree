const error = require("../db/error");

class errorController {
    renderError(request, response) {
        response.render('error', {error});
    }

    renderNotFound(request, response){
        response.render('notFound.hbs');
    }
}

module.exports = new errorController();
