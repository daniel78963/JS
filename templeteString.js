//template strings o plantillas literales
//string interpolation
//backticks ``

const apellido = 'RAMIREZ';
const pais = "CO";

const saludo = "Hola, " + apellido + ", ¿Cómo estás?";

const saludoTemplate = `Hola, ${apellido}, ¿Cómo estás?`;

console.log(saludoTemplate);

//node templeteString.js

let sumar = (a,b) => a+b;

const mensaje = `Hola ${apellido},

Esta es una carta desde ${pais}.
La suma de de 2 y 3 es ${sumar(2,3)}
`;

console.log(mensaje);