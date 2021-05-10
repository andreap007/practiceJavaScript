
/* const yearsUntileRetirement = (birthYear, firstName) => {

    const age = 2047 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;

}

console.log(yearsUntileRetirement(1995, 'David'));
console.log(yearsUntileRetirement(1989, 'Anna')); */


//MARK - Function challenge #1


/*Create a function that takes avarage scores of each team and 
log the winner in the console. Example "Koalas win (30 vs. 13)" */

// without an array

const calcAvarage = (score0, score1, score2) => {

    const avarageScore = (score0 + score1 + score2) / 3;

    return `${avarageScore}`
};

const avgDoplhins = calcAvarage(44, 23, 71);
const avgKoalas = calcAvarage(50, 87, 14);

if (avgDoplhins > avgKoalas) {
    console.log(`Dolphins win (${avgDoplhins} vs. ${avgKoalas})`);
} else if (avgDoplhins === avgKoalas) {
    console.log(`The score is even (${avgKoalas} vs. ${avgDoplhins})`);
} else {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDoplhins})`);
}



// with an array

const avarageScore = [0, 1, 2] / 3;

const calcAvarage = (avarageScore) => {

    const calcAvgScore = avarageScore / 3;

    return `${calcAvgScore}`
};

const avgDoplhins = calcAvarage(78, 54, 84);
const avgKoalas = calcAvarage(50, 87, 14);

if (avgDoplhins > avgKoalas) {
    console.log(`Dolphins win (${avgDoplhins} vs. ${avgKoalas})`);
} else if (avgDoplhins === avgKoalas) {
    console.log(`The score is even (${avgKoalas} vs. ${avgDoplhins})`);
} else {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDoplhins})`);
}


