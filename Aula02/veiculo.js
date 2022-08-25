class Veiculo{
    placa = String(this.placa);
    ano = Number(this.ano);
    anoS = String(this.anoS);

    constructor(placav, anov, anovS){
        this.placa = placav;
        this.ano = anov;
        this.anoS = anovS;
    }

    setPlaca(placav){
        this.placa = placav;
    }
    setAno(anov){
        this.ano = anov;
    }

    setAno(anoS){
        this.ano = anoS;
    }
    
    getPlaca(){
        return this.placa;
    }
    
    getAno(){
        return this.ano
    }
    
    showInfo(){
        console.log('Placa do veiculo:' + this.placa);
        console.log('Ano:' + this.ano);
        console.log('Ano do modelo:' + this.anoS);
    }
    
}

class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, anoS, eixoso){
        super(placa, ano, anoS),
        this.eixos = eixoso;
    }

    setEixos(eixoso){
        this.eixos = eixoso;
    }
    
    getEixos(eixoso){
        this.eixos = eixoso;
    }


    showInfo(){
        console.log(`Placa: ${this.placa}`),
        console.log(`Ano: ${this.ano}`),
        console.log(`Ano do modelo: ${this.anoS}`),
        console.log(`Número de Eixos: ${this.eixos}`)
    }
}

class Onibus extends Veiculo{
    assentos;

    constructor(placa, ano, anoS, assentoso){
        super(placa, ano, anoS),
        this.assentos = assentoso;
    }

    setAssentos(assentoso){
        this.assentos = assentoso;
    }

    setAssentos(assentoso){
        this.assentos = assentoso;
    }

    showInfo(){
        console.log(`Placa: ${this.placa}`),
        console.log(`Ano: ${this.ano}`),
        console.log(`Ano do modelo: ${this.anoS}`),
        console.log(`Número de Assentos: ${this.assentos}`)
    }
}


let carro = new Veiculo("AGH1H55", 2021, "2020/2021")
let caminhao = new Caminhao("JDH4O56", 2000, "2001/2002", 5);
let caminhao1 = new Caminhao("AIS5L09", 2020, "2019/2020", 4);
let onibus = new Onibus("SGI6K25", 1995, "1994", 48);

carro.showInfo();
caminhao.showInfo();
caminhao1.showInfo();
onibus.showInfo();