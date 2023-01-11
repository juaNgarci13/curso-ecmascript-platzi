import getData from './playground-01.mjs'

async function solution() {
    return await getData().then(list => console.log(list))
}

solution(); 