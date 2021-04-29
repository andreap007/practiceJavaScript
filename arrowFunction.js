
const yearsUntileRetirement = (birthYear, firstName) => {

    const age = 2047 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;

}

console.log(yearsUntileRetirement(1995, 'David'));
console.log(yearsUntileRetirement(1989, 'Anna'));
