console.log(["hello"]);

/*
JavaScript is a dynamically typed language. This means that variables do not need to be declared with a specific data type, and the data type of a variable can change at runtime. This can be both a blessing and a curse. On the one hand, it makes JavaScript code more flexible and easier to write. On the other hand, it can lead to errors if the programmer is not careful.
*/


// primitive data types

// 7-8 types
 
/*
String
number 
boolean
Null
undfined
symbol
BigInt
*/

// const score = BigInt(100);
// console.log([typeof score]);

// Symbol defined
const id = Symbol('22');
// const anotherId = Symbol('123');
// console.log([id === anotherId]);

// bigInt 
const bigNumber = 999999999888888888888444444n;

// console.log([bigNumber])

// referance data types nonprimitive Datatypes

/*

array []
objects {} 
Functions 
*/

const heros = ["Shree Ram", "Hanuman", "Krishna", "Shiv Sankar",];
let myObj = {
    name: "Rupesh",
    age: "19",
    Gender: "male",
    Life: "Single",
    Goal: "Hacker"

};
let myObj2 = {
    name: "KUldeep",
    age: "15",
    Gender: "male",
    Life: "Not Report",
    Goal: "Gamer"

};

const myIdea = function () {

    console.log("HEllo world");



}
// console.table([heros]);
// console.table([myObj, myObj2])
console.log(myIdea);