// ejecutar de manera estricta una de las reglas

// no permite asignar variables sin declararlas previamente
'use strict';

pi = 3.1416; // asignado sin declarar
console.log(pi);

function myFunction() {
    // se puede usar el modo estricto dentro de funciones
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction())


// No funciona en bloques en específico
if(true) {
    'use strick';
    pi = 123;
    console.log(pi);
}