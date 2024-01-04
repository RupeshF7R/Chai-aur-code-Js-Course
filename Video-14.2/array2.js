const myMovies = ["Salaar", "kantara", "Dunki"];
const myMovies2 = ["Salaar", "RRR", "Pushpa"];

// myMovies.push(myMovies2);

// console.table(myMovies[4]);

// const my = myMovies.concat(myMovies2);
// console.log(my);

// spread make it spread


const allHeros = [...myMovies, ...myMovies2];
// console.log(allHeros);

const any_arr = [1, 2, 3, [4, 5, 6], 7, [5, 6], [8, 9]];


const use_another_arr = any_arr.flat(Infinity);
console.log(use_another_arr);


// data scraping

// arrays

// console.log(Array.isArray("Rupesh"));

// from us to convert to arrays
// console.log(Array.from("Rupesh"));
// console.log(Array.from({ name: "Rupesh" }));  // interview

let score = 100;
let score2 = 100;
let score3 = 100;
console.log(Array.of(score, score2, score3)); //Array.of use to change lot of elements
// to array 
