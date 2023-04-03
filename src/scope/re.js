// var
var firstName; // Declaración - Undefined
firstName = 'Daniel'; // Asignación
console.log(firstName); // >> Daniel

var lastName = "David"; // Declaración y Asignación 
lastName = 'Ana'; // Reasignación
console.log(lastName); // >> Ana

var secondName = 'David'; // Declaración y Asignación
var secondName = 'Ana'; // Redeclaración
console.log(secondName); // >> Ana

//--------------------------------

// let
let fruit = 'Apple'; // Declaración y Asignación
fruit = 'Kiwi'; // Reasignación
console.log(fruit);

// let no se puede redeclarar
let fruit = 'Banana';
console.log(fruit);

//--------------------------------

// const 
const animal = 'dog'; //Declaración y asignación
console.log(animal);

// const no se puede reasignar
animal = 'cat';
console.log(animal);

// const no se puede redeclarar
const animal = 'Snake';

/* 
aunque se supone que las constantes no se pueden reasignar
 o redeclarar, es decir modificar su contenido,
 al crear un arreglo con const, si se permite añadir elementos
ya que no se está reasignando o redeclarando, teniendo en cueneta 
que la referencia es hacia el arreglo, se pueden realizar acciones
propias de una arreglo
 */ 
const vehicles = [];
vehicles.push("chevrolet"); // agrega elemento al array
console.log(vehicles);

vehicles.pop(); // agrega elemento al array
console.log(vehicles);