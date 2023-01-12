const PromiseFn = () => {
    return new Promise((res, rej) => {
        (true)
            ? setTimeout(() => res('Async'), 2000)
            : rej(new Error('Error!'));
    });
}

const anotherFunc = async () => {
    const something = await PromiseFn()
    console.log(something);
    console.log("Hello!");
}

console.log("Before");
anotherFunc();
console.log("After");

// async y await

