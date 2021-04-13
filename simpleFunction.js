'use strict'

function fruitJuice(apples, oranges) {
    const juice = `We have juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitJuice(7,0);
console.log(appleJuice);
const orangeJuice = fruitJuice(0,8);
console.log(orangeJuice);
const mixJuice = fruitJuice(4,9);
console.log(mixJuice);
