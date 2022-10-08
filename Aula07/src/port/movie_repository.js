<<<<<<< HEAD
const { MovieModel } = require('../infrastructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new MovieModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await MovieModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

=======
const { MovieModel } = require('../infrastructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new MovieModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await MovieModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
module.exports = MovieRepository;