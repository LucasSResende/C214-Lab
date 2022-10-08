<<<<<<< HEAD
const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Quem vai casar com Mary",
        diretor: "Peter Farrelly, Bobby Farrelly",
        duracao: "119 min",
        orcamento: "U$23 milhões",
        ano: "1998"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        nome: "Quem vai casar com Mary",
        diretor: "Peter Farrelly, Bobby Farrelly",
        duracao: "119 min",
        ano: "1998"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido', () => {
    const result = Validation.create({
        nome: "American Pie",
        diretor: "Paul Weitz, Chris Weitz",
        duracao: "95 min",
        orcamento: "U$11 milhões",
        ano: "1999"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        nome: "American Pie",
        ano: "1999"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Janela Secreta",
        diretor: "David Koepp",
        duracao: "106 min",
        orcamento: "U$40 milhões",
        ano: "2004"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        nome: "Janela Secreta",
        diretor: "David Koepp"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
=======
const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Quem vai casar com Mary",
        diretor: "Peter Farrelly, Bobby Farrelly",
        duracao: "119 min",
        orcamento: "U$23 milhões",
        ano: "1998"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        nome: "Quem vai casar com Mary",
        diretor: "Peter Farrelly, Bobby Farrelly",
        duracao: "119 min",
        ano: "1998"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido', () => {
    const result = Validation.create({
        nome: "American Pie",
        diretor: "Paul Weitz, Chris Weitz",
        duracao: "95 min",
        orcamento: "U$11 milhões",
        ano: "1999"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        nome: "American Pie",
        ano: "1999"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Janela Secreta",
        diretor: "David Koepp",
        duracao: "106 min",
        orcamento: "U$40 milhões",
        ano: "2004"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        nome: "Janela Secreta",
        diretor: "David Koepp"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
});