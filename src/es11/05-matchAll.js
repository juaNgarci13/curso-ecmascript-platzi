const regex = /\b(Apple)+\b/g;

const fruit = 'Guanabana, Roscon, Apple, Sapote';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}