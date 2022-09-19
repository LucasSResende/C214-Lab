const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string'
    },
    diretor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string'
    },
    duracao: {
        presence: {
            allowEmpty: false,
        },
        type: 'string'
    },
    orcamento: {
        presence: {
            allowEmpty: false,
        },
        type: 'string'
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string'
    },
};

module.exports = {
    create,
};