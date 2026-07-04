// creating a post--------------
// const post = {
//     username:"apnaCollege",
//     content:"this is my first post",
//     likes:191,
//     reposts:19,
//     tags:["chai aur code","code with harry"]
// }
// console.log(post);

// get values ------------
// post.content;
// post["content"];

// add and update values----------
// const student ={
//     name:"Sachin",
//     age:26,
//     marks:95.9,
//     city:"Haryana"
// }
// student.city="Pali";
// student.gender;
// student.gender="male";
// delete student.marks;
// console.log(student);

// object of objects - nesting -----------{{}{}{}}

// const classInfo ={
//     ramcharan:{
//         grade:"A+",
//         city:"hydrabad"
//     },
//     alluArjun:{
//         grade:"A",
//         city:"Pune"
//     },
//     prabhas:{
//         grade:"O",
//         city:"Mumbai"
//     }
// }
// // console command---
// classInfo.alluArjun;
// classInfo.prabhas;
// classInfo.alluArjun.city;

// Arrays of object [{}{}{}]
// const classInfo = [
//   {
//     name: "ramcharan",
//     grade: "A+",
//     city: "hydrabad",
//   },
//   {
//     name: " alluArjun",
//     grade: "A",
//     city: "Pune",
//   },
//   {
//     name: "prabhas",
//     grade: "O",
//     city: "Mumbai",
//   },
// ]

// classInfo[0].name;
// classInfo[1].name;
// classInfo[2].name;


// MAth objects----------------------important-----------------------

// Methods

// Math.abs(12)   12   abs= absulute
// Math.abs(-12)   12   negative value convert to positive

// Math.pow(2,4);   2*2*2*2 = 16   a ** b  power 

// Math.floor(5)    5  smallest nearest value for roundof
// Math.floor(5.5)    5  smallest nearest value for roundof  positive number
// Math.floor(-5)    -  5  smallest nearest integer value for roundof

// Math.ceil(5)     5  largest nearest integer value for roundof

// Math.random()   generate random number


// Random Interger generate------()_-----------------------
// from 1 to 10------------------------------------
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);
// ---------------------------------------------------

// from 1 to 100------------------------------------
// let random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
// ---------------------------------------------------

// from 1 to 5------------------------------------
// let random = Math.floor(Math.random() * 5) + 1;
// console.log(random);
// ---------------------------------------------------


// Guessing game---------------------------------------------------------------

// let max = prompt("Enter the max number :");

// let random = Math.floor(Math.random() * max ) + 1;

// let guess = prompt("Guess the number :");

// while (true) {
//     if (guess == "quiet") {
//         console.log("user quit");
//         break;
//     }
//     if (guess == random) {
//         console.log("you are right congrats!! random number was",random);
//         break;
//     }else if(guess < random){
//         guess = prompt("hint : your guess was to small . please try again");
//     }else{
//         guess = prompt("hint : your guess was to large . please try again");
//     }
// }

 
