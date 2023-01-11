async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                    .then(res => res.json())
                    .then(json => console.log(json)))
        }, 1000);
    })
}

export default getData 