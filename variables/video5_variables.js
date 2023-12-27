"use strict";  // it means user use the newer version of javascript 🤣

// ok boss dont use copy pen and dont waste the pages 🤣

// alert("");  // we are using node js in vs code

// impt thinhgs eg
console.log(
    6+
    9+3
);

// the upper side the code was very bakvass
// improve the  code readability

let name = "string"
let age = 18
let isLoggedIn = true //boolean

// this all are primitive data types
//  number is the limit are the 2 to the power 52
// bigint
//  string are use define is  ==> ""
// boolean ==> true/flase
// null ==> 0 kuch nahi 🤣🤣
// undefined space hai but data nahi hai
// symbol ==> @#$%^&* Unique

// object data type this is VVIP
// to dosto null is the object data type hai isne dhoka diya hai primitive data type ko 🤣🤣🤣

console.log(typeof null); // object is ans 🤣🤣
console.log(typeof undefined); // unidefined is ans


// boolean data type show represent false
const bCan = new Boolean()
const bsting = new Boolean("")
const bdirect = new Boolean(false)
const bnnull = new Boolean(null)
const bnnu = new Boolean(0)

console.log([typeof bCan,bsting,bdirect,bnnull,bnnu]);

// boolean show the true
const cbox = new Boolean([])
const cscoop = new Boolean({})
const cstring = new Boolean("false")
const cextraMister = new Boolean("fuck yourself")
const cextrastring = new Boolean("true")
const cextrastring2 = new Boolean(true)
console.log([typeof cbox, cscoop, cstring, cextraMister, cextrastring, cextrastring2]);

// output is
/*
[                                                                                 'object',                                                                       [Boolean: false],                                                               [Boolean: false],                                                               [Boolean: false],                                                               [Boolean: false]
]                                                                               [                                                                                 'object',                                                                       [Boolean: true],                                                                [Boolean: true],                                                                [Boolean: true],                                                                [Boolean: true],                                                                [Boolean: true]
]   
*/


// Number data types
let nUmber = "68";
let nMber = 68;
console.log([typeof nUmber, nMber])

const bIgNum = BigInt(999999999999999999999999);
const bIgNumm = BigInt(0o377777777777777777);
console.log(bIgNumm)
console.log([typeof BigInt("1")]);
console.log([typeof Object(1n) === "object"]);