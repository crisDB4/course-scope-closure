const myGlobal = 0; // variable global

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();


function contador ( i ) {
    let acumulador = i
    function aumentar () {
      console.log(acumulador);
      acumulador = acumulador + 1
    }
    return aumentar
  };
  
  const closure = contador(1)
  closure() // 1
  closure() // 2
  closure() // 3
  
  const closure2 = contador(10);
  closure2() // 10
  closure2() // 11
  
  closure() // 4


function sumWithClosure(firstNum=0) {
    return function operation(secondNum=0) { 
      return function (tercer=0) {
        return firstNum + secondNum + tercer;
      }
    }
  }
console.log(sumWithClosure(1)(2)());  