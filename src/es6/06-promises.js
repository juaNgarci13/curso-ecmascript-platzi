// las promesas son cosas que van a pasar y dependiendo de eso, sucederan otras cosas

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("hey!!")
        } else {
            reject("Chale,todo salio mal")
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));