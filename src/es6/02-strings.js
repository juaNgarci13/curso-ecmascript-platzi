// STRING

let hello = "Hello";
let world = "World";
let saludo = hello + " " + world;

console.log(saludo);


// TEMPLATE LITERALS
const saludo2 = (one, two) => {
    console.log('====================================');
    console.log(`${hello} ${world}!`);
    console.log('====================================');
}

saludo2(hello, world)


// MULTI-LINES String

let lorem = `esto es un string \n esto es un salto de linea del string `
console.log(lorem);

let lorem2 = `esta es una frase epica
esto es la continuacion de esa frase epica`
console.log(lorem2);