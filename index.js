// import { nombre, edad } from './persona'
// import nombre, { edad } from './persona'
import nombre, { edad as edad2, duplicar } from './persona'

// document.getElementById('app').innerHTML = "fff"; 

// document.getElementById("app").innerHTML = `
// ${nombre}
// `;

// document.getElementById("app").innerHTML = `
// ${nombre} ${edad2} ${duplicar(3)}
// `;
const mi = document.getElementById('app');
mi.innerText = '¡Hola mundo!';

const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';