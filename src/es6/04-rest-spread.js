// DESESTRUCTURACIÓN

// ARRAYS DESTRUCTURING
let comida = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥓"]
let [, , , , , a] = comida;
/*Arroja 🥓 ya que con las comas, saltamos los demas elemento del arreglo*/
console.log(a);


let user = { userName: "Juan", age: 19 }
let { userName, age, } = user
console.log(userName);
/*Esto se podria usar en la desestructuración del estado eb react */


// SPREAD OPERATOR
let person = { name: "Juan", age: 19 }
let country = "CO";

let data = { id: 1, ...person, country };
console.log(data);

/*Nos sirve cuando vayamos a actualizar el estado en react */

// REST PARAMETERS

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0]
}

sum(1, 2, 3, 4, 5, 67, 8, 9)

