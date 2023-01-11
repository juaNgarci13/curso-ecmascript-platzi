// identificador de Id's de michis 
// con un generador

function* getId() {
    let michisId = 0
    while (michisId < 10) {
        console.log("El id del michi es: " + michisId)
        michisId++
    }
}

const id = getId();
id.next().value;