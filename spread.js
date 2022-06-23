//... SPREAD
const sumar = (a, b) => a + b;
const numeros = [2, 3];
const suma = sumar(...numeros);
console.log(suma);

const masNumeros = [1, numeros];
console.log(masNumeros);
const masNumerosMismo = [1, ...numeros];
console.log(masNumerosMismo);

const otrosNumeros = [4,5];
const concatenar = [...numeros, ...otrosNumeros];
console.log(concatenar);

const [primero, ...resto] = masNumerosMismo;
console.log('masNumeros', masNumerosMismo);
console.log('primero', primero);
console.log('resto', resto);

//clonar
const masNumerosMismoClonado = [...masNumerosMismo];

const persona = {
    nombre: "Daniel",
    apellido: "Ramirez"
}

const edadPersona = {
    ...persona,
    edad: 22
}
console.log('personaEdad', edadPersona);