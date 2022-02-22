function isUserValid(request, response, next) {
    try {
        const {email, password} = request.body;

        if (!email || !password) {
            throw new Error('Email or password is not provided!')
        }

        next();
    } catch (error) {
        console.log(error.message)
        response.status(400).send(error.message)
    }
}

module.exports = isUserValid;
