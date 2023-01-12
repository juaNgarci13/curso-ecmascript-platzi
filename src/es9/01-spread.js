const user = {
    nickName: "JdeManuel",
    age: 23,
    country: "CO"
}

const { nickName, ...values } = user;
console.log(nickName);
console.log(values);
