<<<<<<< HEAD
const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./movie_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    }
};
module.exports = Validation;
=======
const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./movie_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    }
};
module.exports = Validation;
>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
