//variables

var a; // declarando
var b = "b"; // declaramos y asignamos
b = "bb"; // reasiganción
var a = "aa"; // redeclaración


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();



function countries() {
    countrie = 'Colombia';
    console.log(countrie);
}

countries();
console.log(countrie);