const promise1 = new Promise((res, rej) => {
    (true)
        ? res("Hola Mundo")
        : rej("Adios Mundo :(")
})

const promise2 = new Promise((res, rej) => {
    (true)
        ? res("Hola Mundo")
        : rej("Adios Mundo :(")
})

const promise3 = new Promise((res, rej) => {
    (true)
        ? res("Hola Mundo")
        : rej("Adios Mundo :(")
})

Promise.allSettled([promise1, promise2, promise3])
    .then((res) => console.log(res))
