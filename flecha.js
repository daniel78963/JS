let funcion = function duplicar(valor){
    return valor * 2;
};

let duplica = (valor) => {
    return valor * 2;
}
//de manera implicita hay un return
let duplicaDos = valor => valor * 2;

//cuando es funcion flecha con mas de un parametro, necesito utilizar parentesis
let sumar = (sumando1, sumando2) => sumando1 + sumando2;

let imprimirAlgo = () => console.log('algo');  

//this
const obj = {
    funcionNormal: function(){
        console.log('función normal', this);
    },
    funcionFlecha: () => {
        console.log('función flecha', this);
    }
}

console.log('this.del ambiente', this);
//hace referencia al objeto que hizo la invocación
obj.funcionNormal();
//coge el ambiente donde fue definada la función
obj.funcionFlecha();

//node flecha.js