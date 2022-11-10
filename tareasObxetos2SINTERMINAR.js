//EXERCICIO 

class Produto{
    constructor(marca, categoria, unidades, prezo) {
        this.marca = marca;
        this.categoria = categoria;
        this.unidades = unidades;
        this.prezo = prezo;
    }

    importe(){
        return this.prezo * this.unidades;
    }

    getInfo() {
        return `${this.categoria} (${this.marca}): ${this.unidades} x ${this.prezo} = ${this.importe()}`;
    }
}

producto1 = new Produto("Philips", "Lavadora", "3", "429.99");
console.log(producto1.getInfo());

class Televisor extends Produto{
    constructor(marca, categoria, unidades, prezo, tamaño) {
        super(marca, categoria, unidades, prezo);
        this.tamaño = tamaño;
    }

    getInfo() {
        return `${super.getInfo()} | Tamaño: ${this.tamaño}`;
    }
}

televisorCubo = new Televisor("Panasonic", "Television Tubo", "49", "199.99", "40 x 40");

console.log(televisorCubo.getInfo());

producto2 = new Produto("Philips", "Lavadora", "1", "136.99");
producto3 = new Produto("Sony", "Auriculares", "9", "87.49");
producto4 = new Produto("Samsung", "Smartphone", "3", "679.99");
producto5 = new Produto("Samsung", "Smartphone", "12", "252.00");

listado = [producto1, producto2, producto3, producto4, producto5];

console.table(listado);

function prodsSortByCategory(array) {
    
}