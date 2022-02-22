function orAllEntered(request, response, next) {
    try {
        const {firstName, lastName, email, password, age, city} = request.body;

        if (!email) {
            throw new Error('Please, enter "Email"')
        }
        if (!password) {
            throw new Error('Please, enter "Password"')
        }
        if (!lastName) {
            throw new Error('Please, enter "Last Name"')
        }
        if (!firstName) {
            throw new Error('Please, enter "First Name"')
        }
        if (!age) {
            throw new Error('Please, enter "Age"')
        }
        if (!city) {
            throw new Error('Please, enter "City"')
        }

        next();
    } catch (error) {
        console.log(error.message)
        response.status(400).send(error.message)
    }
}

module.exports = orAllEntered;
