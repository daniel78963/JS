let persona = {
    nombre: "Daniel",
    apellido: "Ramirez",
    edad: 25
}

// const nombre = persona.nombre;
// const apellido = persona.apellido;
// const edad = persona.edad;


const { nombre, apellido, edad } = persona;
console.log(nombre);
console.log(apellido);
console.log(edad);


obtenerDireccion = () => {
    return {
        calle: 'Siempre viva',
        pais: 'Colombia',
        departamento: 'Antioquia'
    };
}
const { pais, departamento } = obtenerDireccion();
console.log(pais);
console.log(departamento);


imprimirNombre = (persona) => {
    console.log(persona.nombre);
}
imprimirNombre2 = ({ nombre }) => {
    console.log(nombre);
}
imprimirNombre(persona);
imprimirNombre2(persona);


//alt + shift + f
const arreglo = [1, 2, 3, 4];
const [primero, segundo, ,cuarto] = arreglo;
console.log(primero);
console.log(segundo);
console.log(cuarto);


const retornarArreglo = () => {
    return ['Daniel','Ramirez']
}
const [primernNombre, primerApellido] = retornarArreglo();
console.log(primernNombre);
console.log(primerApellido);