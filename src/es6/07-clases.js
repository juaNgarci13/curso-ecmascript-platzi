
// DECLARACION DE UNA CLASE
class user {
}

// INSTANCIA DE UNA CLASE
const newUser = new user();

class User {
    // metodos
    greeting() {
        return "Hello"
    }
};

const Juan = new User()
console.log(Juan.greeting());


// constructor
// el constructor es unn metodo que siempore se va ejecutar

class ejem1 {
    constructor() {
        console.log("hola desde el constructor");
    }
}
const ejem1solution = new ejem1();

// this
// el constructor es el que resive las props o los parametros

class ejem2 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return "Hello"
    }

    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ejem2solution = new ejem2("Juan")
console.log(ejem2solution.greeting());

// getters and setters
class ejem3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metods
    speak() {
        return "hello"
    }
    greeting() {
        return `${this.speak()} ${this.name} your age is: ${this.age}`
    }

    // OPTENER UN VALOR DEL CONSTRUCTOR
    get uAge() {
        return this.age
    }

    // ASGINARLE UN VALOR AL CONSTRUCTOR
    set uAge(u) {
        this.age = u;
    }
}

const ejem3solution = new ejem3("Juan", 19);
console.log(ejem3solution.uAge); /* SELECCIÓN UTILIZANDO EL GETTERS*/
console.log(ejem3solution.uAge = 22); /* ASIGNACION UTILIZANDO EL SETTER */
