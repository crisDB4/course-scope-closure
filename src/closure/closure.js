function greeting() {
    let username = 'Oscar';

    function displayUserName() {
        return `Hello ${username}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g); // retornando la función
console.log(g()); // nos entrega el valor Hello Oscar