// la función map permite tomar los valores de un arreglo, realizar operaciones con ellos y guardarlos en un nuevo arreglo

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((valor) => valor * valor);
console.log('numeros', numeros);
console.log('cuadrados', cuadrados);

//map: extraer información de arreglos
const personas = [
    { id: 1, nombre: "Daniel", pais: "Colombia" },
    { id: 2, nombre: "Alejandro", pais: "Perú" },
    { id: 3, nombre: "Alberto", pais: "Colombia" }
];
const ids = personas.map(persona => persona.id);
console.log('ids', ids);

const nombresPaises = personas.map(persona => {
    return { nombre: persona.nombre, pais: persona.pais }
});

console.log('Nombre y Paises', nombresPaises);

//map para crear código HTML
const divs = nombresPaises.map(persona => `
<div>
    <span>${persona.nombre}</span> (país: ${persona.pais})
</div>
`);
console.log(divs);