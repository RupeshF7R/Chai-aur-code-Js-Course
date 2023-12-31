const balanceAmount = 99;
// console.log(balanceAmount);

const score = new Number(100);
// console.log(score);

// console.log(score.toString().length);
// console.log(score.toFixed(2));


// .tofixed is use to define the 0 valve after the
// amount like this 100.00 when you give 2 fixed value
// js provide 2 zero after the amount when you types fixed
// 5 then valve look like this 100.00000
// .tofixed is used to ecommerace website and apps for
// easiness for customers


const numTwo = 1134.7966;
// console.log(numTwo.toPrecision(5))

/*
in the .toprecision use to round of the value number like 222.3334 to use precision(3) they show 3 value
only like 222 they hide the . after value when you write the precision(4) they 222.8 they show . after 1 value

when this question ask in interviews round say like  this when our price is 200 we know we order 1 thing only 200 then we use precision(3) when we know we have the more value/ amounts items then we change valve to 3  -10 and more
VALUES 
*/

const numOne = 1000000;
// console.log(numOne.toLocaleString(`en-IN`));

// .toLocaleString() use for arrange the number in string form
//  like 1000000 it is simple when you apply .toLocaleString()
// they look like 10,00,000 like this
// this is country Specific (en-IN) for india

// Number.MIN_SAFE_INTEGER(7);
const numT = 999887658;
console.log([numT]);