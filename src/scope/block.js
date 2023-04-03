function fruits() {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2); // se imprime por ser block scope
        console.log(fruit3); // se imprime por ser block scope
    }
    console.log(fruit1); // se imprime porque es var (function scope)
    console.log(fruit2); // error porque es let (block scope)
    console.log(fruit3); // error porque es const (block scope)
}

fruits();