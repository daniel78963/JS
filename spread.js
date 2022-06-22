//... SPREAD
const sumar = (a, b) => a + b;
const numeros = [2, 3];
const suma = sumar(...numeros);
console.log(suma);

const masNumeros = [1, numeros];
console.log(masNumeros);
const masNumerosMismo = [1, ...numeros];
console.log(masNumerosMismo);

