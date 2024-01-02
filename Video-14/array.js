console.log(["Arrays in js"]);


// /* The `arrays` keyword is not doing anything in this code. It is simply a comment that describes
// the section of code that follows it. */
// javascript arrays are resizable make changes are easy

const meArr = [0,3,5,6,7,9,2,1];
// console.log([meArr]);
// console.log(meArr[1]);

//  interviews
// in the js when you the elements in js make shell copies not copy only
// shallow copy
// deep copy

// const myHero = ["Hanuman","Shree Ram","Krishna","Shree Shyam"];
const myBike = [1,2,3,4,5,6];
const myCars = ["Aston Martin DB9", "BMW XM", "BMW Z4", "Mclaren GT","Lamborghini Revuelto"];
const myMovies = ["Salaar", "RRR", "KGF", "Pushpa", "kantara", "Dunki"];

const myARR2 = new Array("Hanuman", "Shree Ram", "Krishna", "Shree Shyam");

/*
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
0map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true,
*/
// console.log(myCars[0])


// array methods

// console.log(myBike)
// myBike.push("Splander");
// console.log(myBike)
// myBike.pop("Splander");
// console.log(myBike)
// myBike.push("Splander");
// myBike.unshift(0);
// console.log(myBike)
// myBike.shift();

/* The code is using the `includes` method to check if the array `myBike` includes the string "Kawasaki
Z650". It will return `true` if the string is found in the array, and `false` otherwise. */
// console.log(myBike.includes("Kawasaki Z650"));
// console.log(myBike.indexOf("Hero Xtreme 160R"));

/* The code `const myNewBike = myBike.join();` is using the `join()` method to convert the elements of
the `myBike` array into a single string. The resulting string will have all the elements of the
array separated by commas. The string is then assigned to the variable `myNewBike`. */
// const myNewBike = myBike.join();

// console.log(myBike);
// console.log(typeof myNewBike);
// console.log(myNewBike);
 
// myBike.pop([2]);
// console.log(myBike)

// slice , splice

console.log("A ", myBike);

const myB = myBike.slice(0,3) // take 3 0-3 but 3 not count 
console.log(myB);
console.log("B ", myBike);
// console.log(myB);


// splice manipulate the arrays
const myB2 = myBike.splice(0, 3) // take 3 0-3 count all before and after all count 
console.log("C ", myB2);
console.log(myB2)