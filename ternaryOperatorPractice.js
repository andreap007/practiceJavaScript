
// MARK: practice conditional ternary operator 

const bill = 430;
const firstTip = bill * 15/100;
const secondTip = bill * 20/100;
const tip = bill >= 50 && bill <= 300 ? firstTip : secondTip; //get value with precentage 
console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)

// Coding Challenge #2 functions and arrays

/* 
tip 15% if the bill value is between 50 and 300, and if the value is differnt, the tip is 20%
first create a functin that takes any bill value as an input and returns the corresponding tip, 
create an array for bills value, and an array for tips containing the value for each bill
*/


const calcTip = (bill) => {
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = bills + tips;

console.log(tips, totals);

