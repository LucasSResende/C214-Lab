<<<<<<< HEAD
const mongoose = require('mongoose');

const uri = `--------------`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,  
        unique: true,
    },
    diretor: String,
    duracao: String,
    orcamento: String,
    ano: String
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = {
    MovieModel,
=======
const mongoose = require('mongoose');

const uri = `--------------`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,  
        unique: true,
    },
    diretor: String,
    duracao: String,
    orcamento: String,
    ano: String
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = {
    MovieModel,
>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
};