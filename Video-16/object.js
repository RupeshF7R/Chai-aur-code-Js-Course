// the singleton are made with constructor
// when we declare like literals then not made singleton object


// objects literals
// Object.create  ===  this is constructor

const mySum = Symbol("add_symbol")
const jsUser = {
    Username:"@Rupesh9369",
    name: "Rupesh",
    "Full Name": "Rupesh Sharma",
    age: "18",
    location: "Alwar",
    Mobile: "xiaomi",
    Email: "Rupesh@hacker.net",
    isLoggedIn: true,
    iP_Address: "127.168.11.4",
    Last_Login_Day:["mon","sun","tue","wen"],
    Laptop: "Lenovo",
    Hobbies: "Hacking",
    [mySum]: "add_symbol"
} // this is literals Objects
// console.log("Before The Changes : ",jsUser[mySum]);
// console.log("Before The Changes : ", jsUser.Username);
jsUser.Username = "@kuldeep";
// console.log("After The Changes : ", jsUser.Username);
// console.log(jsUser["Full Name"]);
// console.log(jsUser["Full Name"]);
jsUser[mySum] = "HEllo world";
// console.log(typeof jsUser[mySum]);
// console.log("After The Changes : ", jsUser[mySum]);
// console.log(jsUser.add_symbol);

// console.log(mySum);
const jsUser2 = {
    name: "Rupesh",
    age: "19.4"
}
// console.log("Before The Freeze : ",jsUser2.name);
// Object.freeze(jsUser2);
// jsUser2.name = "Kuldeep";
// console.log("After the Freeze : ",jsUser2.name);

jsUser2.greeting = function () {
    console.log("Hello Js User From Bharat, India");
    return;
}
jsUser2.greeting2 = function () {
    console.log(`Hello User : ${this.name}`); // this. show all current Function Data/Elements/variables
    return "null";
}
console.log(jsUser2.greeting2());

console.log(jsUser2.greeting); // = Undefined value Because of Freeze the object
// console.log(jsUser2.greeting()); // Error Value


// Impt Cases
/*
most of the time users are used to define the function variables define to use the . method 
but some cases use the [] method for define the function variables 
but interview point of view they ask all format to confuse you 
*/

//  change the username