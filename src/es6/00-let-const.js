// las variables son las formas en las que podemos asignar un valor a un espascio en memora 

// Declarar => decalra una variable   
// Asignar => le asignamos un valor en especifico 

var nombre = "Juan Manue Garcia"
nombre = "Juan" /*ReasignaciΓ³n de una variable*/
console.log(nombre);

// las variables var tiene un scope global, no importa en donde declaremos la variable con el var, quedara disponoble para cualquier

// las variuables declaradas con let ya tienden a tener un scope, que es la posibilidad  de poder trabajarlas solo donde fueron declaradas

let comida = ["π", "π", "π", "π­", "πΏ", "π₯"]
comida.push("π₯")
console.log(comida);

// las variables declaras con const no puden ser reasignadas como las demas, estas tambien cuentan con la posibilidad del scope

const elementos = ["aire", "agua", "fuego", "tierra"]
elementos = ["solido"] /*ERROR!*/
console.log(elementos);

const fruits = () => {
    if (true) {
        var fruit1 = "π₯"
        let fruit2 = "π"
        const fruit3 = "π₯"
    }
    console.log(fruit1, fruit2, fruit3);
}

fruits(); /*Solo la variable declarada con var solo puede ser acceder fuera del bloque del Scope*/

