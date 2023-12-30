const name = {
    name: "Rupesh"
};
const repoCount = 14;

// outdated syntax
// console.log(name +  repoCount + " Repo");

//  morden syntax
// ${ Function name }
// console.log([`Hello my Name is ${name.name} My Repo On GitHub ${repoCount}`]);

// const gameName = new String("Rupesh");
// console.log(gameName[0]);
// access the [0] elements no.
// console.log(gameName.__proto__);
// __proto__

// make a New String 
const gameNamE = new String("Rupesh-vitaltag"); 
// console.log(gameNamE.length);
// change Alphabet upper to lower
// console.log(gameNamE.toLowerCase());

// change Alphabet lowe to upper
// console.log(gameNamE.toUpperCase());

// check the char value means check alpha
// console.log(gameNamE.charAt(4));

// indexof show the number of the string
// console.log(gameNamE.indexOf('s'));

// string - substract //slice using .substring(0,6)

// const newString = gameNamE.substring(7, 12);

// console.log(newString);

const anotherString = gameNamE.slice(0, -14)
// console.log(anotherString);

// example 🔻🔻⤵⬇👇🏻

/*const newName = "Rupesh-Sharma";

const newName2 = newName.substring(7, 13);
console.log(newName2);*/


// .Trim() Remove the Ennoing Space

const userName = "    Rupesh    ";
// console.log(userName);
// console.log(userName.trim());
// console.log(userName.trimStart());
// console.log(userName.trimEnd());



// .replace()

const url = "https://www.Vitaltag.net/Rupesh%20Sharma";


// console.log([url.replace('%20', '-')]);

const nemName = "user@media.net";
const nemName1 = "user@media.net";
const nemName2 = "user@media.net";
// console.table([nemName, nemName1, nemName2]);
// console.log([`After apply the replace()`]);

// console.log([nemName.replace('@', '.')]);
// console.log([nemName1.replace('net', 'com')]);
// console.log([nemName2.replace('media', 'google')]);

// console.log(url.includes('not'));


const gameNam = new String('Rupesh.youtuber.india');
console.log(gameNam.split('.'))
