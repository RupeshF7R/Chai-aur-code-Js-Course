console.log(['hello world !'])

const myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());  // good for showing am pm and time
// console.log(myDate.toLocaleDateString()); // showing date 1/1/2024
// console.log(myDate.toUTCString()); // eg is mon,01 jan 2024 gmt timezone
// console.log(myDate.getTimezoneOffset());
// console.log([typeof myDate]);

// const newyearDate = new Date(2023, 0, 23);
// const newyearDate = new Date(2023, 0, 23, 5, 3);
const newyearDate = new Date("01-01-2024"); // yy mm dd
// const newyearDate = new Date("01-01-2024"); // dd mm yy

// Date.toLocaleString() use for own data like own custom date
// console.log(newyearDate.toLocaleString());

const myTimeStamp = Date.now();

/* `console.log(newyearDate.getTime());` is printing the number of milliseconds since January 1, 1970,
00:00:00 UTC (Coordinated Universal Time) until the specified date `newyearDate`. */
// console.log(myTimeStamp);
// console.log(newyearDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let myBirth = new Date();

// console.log(myBirth.getDate());
// console.log(myBirth.getHours());
// console.log(myBirth.getDay());
// console.log(myBirth.getMilliseconds());
// console.log(myBirth.getMinutes());
// console.log(myBirth.getMonth() + 1); // javascript month start from 0 +1 every time

// console.log([`Today date is ${myBirth.getDate()} and Time Is ${myBirth.getTime()}`]);

// myBirth.toLocaleString('default', {
//     calendar: "__defineSetter__",
//     day: "2-digit",
//     hourCycle: "h12",
//     year: "numeric",

// })

// https://youtu.be/q5xkNjyh6ds?si=MxhlPIqUx6CwINhS 
// new Channel

const myD = new Date();

// console.log('mydate is is ',myD.getDate());
// console.log('mytime is is ',myD.getTime());
// console.log('mtime is is ',myD.getDay());
// console.log('Month is is ',myD.getMonth()+1);

console.log(myD.toISOString());
console.log(myD.toLocaleString());

let options = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric'
}
let options2 =
{
    weekday: 'short'
}

console.log(myD.toLocaleString("en-IN", options))
console.log(myD.toLocaleString("en-US", options2))
console.log(myD.toLocaleString("en-US"))

/* The commented code `myD.toLocaleString('default', { timeStyle: 'full' })` is attempting to format
the date and time using the `toLocaleString()` method with the `timeStyle` option set to `'full'`.
However, since it is commented out, it is not actually being executed. */
// myD.toLocaleString('default', {
//     timeStyle: 'full',


// })
let me = ({
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'


})

/* The code `console.log(myD.toLocaleString("en-US", me))` is printing the date and time in the format
specified by the `me` object using the locale "en-US". The `me` object specifies the options for
formatting the date and time, including the weekday, year, month, and day. */
console.log(myD.toLocaleString("en-US", me))
console.log(myD.toLocaleString("hi-IN", me))


// let dateIdea = new Date(year, month, date, hours, second, millisecond);
let dateIdea = new Date(2023, 0, 12, 1, 12, 20000);
console.log(dateIdea);


