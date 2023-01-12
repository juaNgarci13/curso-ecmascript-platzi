async function* anotherFn() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
    yield await Promise.resolve(4)
}

const resultFb = anotherFn();
resultFb.next().then(res => console.log(res.value))
resultFb.next().then(res => console.log(res.value))
resultFb.next().then(res => console.log(res.value))
resultFb.next().then(res => console.log(res.value))
resultFb.next().then(res => console.log(res.value))
console.log("Holaaa!!");


async function otherAnotherFn(arr) {
    for await (let val of arr) {
        console.log(val);
    }
}

let arrayNames = ["Juan", "Manuel"]
otherAnotherFn(arrayNames)
console.log("After");
