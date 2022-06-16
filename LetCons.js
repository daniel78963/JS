
let edad = 23;
console.log(edad);

let funcion = function duplicar(valor)
{
    return valor * 2;
}

const persona = {
    nombre: 'Daniel',
    apellido: 'Ramirez',
    fechaNacimiento: new Date()
}

persona.nombre = 'Alejandro'; //no hay problema pq no estoy reasignando neuvamente el objeto

console.log(persona);