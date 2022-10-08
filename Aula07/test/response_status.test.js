<<<<<<< HEAD
const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/Constants');

it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
=======
const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/Constants');

it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
});