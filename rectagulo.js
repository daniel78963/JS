class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        console.log(`El área del rectángulo es ${this.alto * this.ancho}`);
    }
}
const rectangulo1 = new Rectangulo(2,3);
rectangulo1.area();

//misiones de una clase: permitir reutilziar código

//super: con super puedo acceder a la clase base
class Cuadrado extends Rectangulo {
    constructor (lado){
        super(lado, lado)
        //opcional
        this.lado = lado;
    }

    // area(){
    //     console.log(`El área del cuadrado es ${this.alto * this.alto}`);
    // }
    area(){
        console.log(`El área del cuadrado es ${this.lado * this.lado}`);
    }

    static miFuncionEstatica() {
        console.log('Function static');
    }
}
const cuadrado1 = new Cuadrado(2);
cuadrado1.area();

const figura1 =  new Cuadrado(6);
figura1.area =  function(){
    console.log(`El área de la figura es ${this.lado * this.lado}`);
}
figura1.area();

//funciones estaticas: una funcion estatica es aquella que se puede invocar a través de la clase y no a través de una instancia
Cuadrado.miFuncionEstatica();