<<<<<<< HEAD
const { StatusCodes } = require('http-status-codes');
const { v4: uuidv4 } = require('uuid');

const Constants = require('./constants');

const Utils = {
    responseStatus(data) {
        switch (data) {
            case undefined:
                return StatusCodes.OK;
            case Constants.ErrorValidation.name:
                return StatusCodes.BAD_REQUEST;
            case Constants.ErrorDuplicate.name:
                return StatusCodes.CONFLICT;
            case Constants.ErrorNotFound.name:
                return StatusCodes.NOT_FOUND;
            default:
                return StatusCodes.INTERNAL_SERVER_ERROR;
        }
    },

    generateUuid(){
        return uuidv4();
    },
};

=======
const { StatusCodes } = require('http-status-codes');
const { v4: uuidv4 } = require('uuid');

const Constants = require('./constants');

const Utils = {
    responseStatus(data) {
        switch (data) {
            case undefined:
                return StatusCodes.OK;
            case Constants.ErrorValidation.name:
                return StatusCodes.BAD_REQUEST;
            case Constants.ErrorDuplicate.name:
                return StatusCodes.CONFLICT;
            case Constants.ErrorNotFound.name:
                return StatusCodes.NOT_FOUND;
            default:
                return StatusCodes.INTERNAL_SERVER_ERROR;
        }
    },

    generateUuid(){
        return uuidv4();
    },
};

>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
module.exports = Utils;