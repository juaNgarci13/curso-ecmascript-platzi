const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("hey!!")
            } else {
                reject("Chale,todo salio mal")
            }
        }, 2000)
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => { console.log("Por fin termino") })