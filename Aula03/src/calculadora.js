const validate = require('validate.js');
const CalculadoraValidate = require('./validate');

const Calculadora = {
    soma(numero1, numero2) {
        const validadeNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidate);
        const validadeNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidate);
        if (validadeNumero1 !== undefined && validadeNumero2 !== undefined) {
            return ('Error');
        }
        let sresult = numero1 + numero2;
        return (sresult);
    },
    subtracao(numero1, numero2) {
        const validadeNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidate);
        const validadeNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidate);
        if (validadeNumero1 !== undefined && validadeNumero2 !== undefined) {
            return ('Error');
        }
        let subresult = numero1 - numero2;
        return (subresult);

    },
    multiplicacao(numero1, numero2) {
        const validadeNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidate);
        const validadeNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidate);
        if (validadeNumero1 !== undefined && validadeNumero2 !== undefined) {
            return ('Error');
        }
        let mresult = numero1 * numero2;
        return (mresult);

    },
    divisao(numero1, numero2) {
        const validadeNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidate);
        const validadeNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidate);
        if (validadeNumero1 !== undefined && validadeNumero2 !== undefined) {
            return ('Error');
        }
        let divresult = numero1 / numero2;
        return (divresult);

    },
    restodiv(numero1, numero2) {
        const validadeNumero1 = validate({ numero1 }, CalculadoraValidate.calculadoraValidate);
        const validadeNumero2 = validate({ numero2 }, CalculadoraValidate.calculadoraValidate);
        if (validadeNumero1 !== undefined && validadeNumero2 !== undefined) {
            return ('Error');
        }
        let resdivresult = numero1 % numero2;
        return (resdivresult);

    }

};




module.exports = Calculadora;