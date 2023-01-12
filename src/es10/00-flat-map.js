// los flat y los map, nos devuelve una matriz de cualquier 
// supmatriz. 

// las matrices son arreglos, y con esto tendremos arreglos anidados
// dentro de otros arreglos

const array = [1, 2, 3, 4, 5, [1, 2, 3, [1, 2, 3], 4, 5], 6, 7, 8, 9]

console.log(array.flat(3));

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array2.flatMap(val => [val, val * val]));