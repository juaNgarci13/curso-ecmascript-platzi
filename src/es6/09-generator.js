// tipos de iteradores personalizados
function* iterate(arr) {
    let val

    for (val of arr) {
        yield val;
    }
}

const it = iterate(["Juan", "Oscar", "Ana", "José", "Jennifer"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
// expected output: undefined ? 
// pasa el valor maximo del arreglo


// devido a que es un generador, la palabra reservada next()
// valida que si ya hubo un next(), pasara al siguiente valor
// de nuestro arreglo

function* foo(index) {
    while (index < 2) {
        yield index;
        index++;
    }
}

const iterator = foo(0);

console.log(iterator.next().value);
// expected output: 0

console.log(iterator.next().value);
// expected output: 1

console.log(iterator.next().value);
  // expected output: undefined

//   Si el valor del generador o la variable que le estamos especificando
//   a nuestro generador, pasa del valor max, esl siguiente sera undefined
