// declaracion de una clase
class User { };
// genera una instancia
//const newUser = new User ();

class user1 {
    // metodos
    greeting() {
        return "hello";
    }
};

const gndx = new user1();
console.log(gndx.greeting());
const bebeloper = new user1();
console.log(bebeloper.greeting());

// constructor

class user2 {
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

const david = new user2();

// this

class user3 {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user3("Ana");
console.log(ana.greeting());

// setters getters

class user4 {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user4("david", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);

// La adjuntacion del operador # nnos ayuda a aclarar que
// si una funcion / metodo lo tiene, sera privado y solo se
// podra utilizar en esa clase