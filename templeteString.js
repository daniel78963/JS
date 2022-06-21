//template strings o plantillas literales
//string interpolation
//backticks ``

const apellido = 'RAMIREZ';
const pais = "CO";

const saludo = "Hola, " + apellido + ", ¿Cómo estás?";

const saludoTemplate = `Hola, ${apellido}, ¿Cómo estás?`;

console.log(saludoTemplate);

//node templeteString.js