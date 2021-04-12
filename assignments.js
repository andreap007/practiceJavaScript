let randomNumber = Math.floor(Math.random() * 10 - 1) + 1

if (randomNumber === 1) {
    console.log(`And you have it, the number is ${randomNumber}`);
} else {
    const anotherNumber = randomNumber === 5;
    console.log(`Now we have a number ${anotherNumber}`)
}

if (randomNumber > 8) {
    console.log(`This number is somewhere in the middle, number ${randomNumber}`);
} else {
    console.log(`Or something else here.`);
}