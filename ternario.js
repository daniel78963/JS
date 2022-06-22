const edad = 16;
let mensaje = (edad >= 18) ? "Puedes pasar": "No puedes pasar";

console.log(mensaje);

const paisProp = 'pais';
const paisValor = 'CO';

let persona = {
    nombre: "Daniel",
    [paisProp]: paisValor
}

console.log(persona);

const retornarValoresPersona =  (prop) => persona[prop];
console.log(retornarValoresPersona('nombre'));
console.log(persona['pais']);