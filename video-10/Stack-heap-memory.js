console.log("hello world !");


// Stack Memory
//  == primitive data types
//  give copy address
// provide the copy of the elemnt

//  check the memory.drawio
// download drawio extension


// Heap memory
//  == non-primitive data types
// give refrance original value


let myName = "VitalTag";
let anoName = myName;

// console.table([myName,anoName])
anoName = "NotMasculine";
// console.table([anoName])


//  when you used heap memory for save the data heap memory provide the
// referance of the elements
//  check the memory.drawio
// download drawio extension


let user= {
    email: "Vitaltag@ybl.net",
    name: "Vital man",
    age: "19",
    upiId: "vitaltag@upi",
    gender: "Man"
}

let userT = user;

userT.email = "Rupesh@google.com";

// console.log([user.email]);
// console.log([userT.email]);
console.table([user.name , user.email , user.age , user.gender , user.upiId]);