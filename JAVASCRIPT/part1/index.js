
// // name = prompt("enter name");
// // age = prompt("age");

// // alert(`${name} is ${age} years old `);

// // String methods----------string is immutable in js-------------------------------------------

// // 1. trim method -- for using remove start and end  white spaces in String
// let msg = "    hello    ";
// let newMsg = msg.trim();
// console.log(newMsg);

// // toUpperCase
// let name ="rakesh";
// let upper = name.toUpperCase();  // new string
// console.log(upper)

// // toLowerCase
// let name1 ="RAKESH";
// let lower = name1.toLowerCase();  // new string
// console.log(lower)

// // indexOf
// let str = "rakeshjangid";
// let newStr = str.indexOf("i");  // find the argument i = 10 index
// console.log(newStr)


// // slice
// let str1 = "I am full Stack Developer";
// let newStr1 = str1.slice(0,11);       // I am full S
// let newStr2 = str1.slice(6);       // start 6th index ---ull Stack
// console.log(newStr1)
// console.log(newStr2)

// // replace
// let msg1 = "I am Mern dev";
// let newMsg1 = msg1.replace("Mern",".Net");  // I am .Net dev
// console.log(newMsg1);


// // repeat
// let msg2 = "MERN";
// let newRepeat = msg2.repeat(4); //MERNMERNMERNMERN
// console.log(newRepeat);

// // Arrays------mutable-------------------------------------------------------------------------

// let students = ["Tony","Thor","Hulk"];
// console.log(students);
// console.log(students.length);

// let num=[2,4,6,8];
// console.log(num);
// console.log(num[2]);

// let mix = ["Thor",27,99.9];
// console.log(mix);

// // mutable
// let fruits = ["mango","apple","orange"];
// fruits[0]="banana";
// console.log(fruits);

// // Arrays methods--push pop shift unshift

// let cars = ["swift","maruti","bolero","honda"];
// cars.push("thar");  // add to end
// console.log(cars)
// cars.pop();         // end to remove and return
// console.log(cars)
// cars.unshift("Scorpio");   // add to start
// console.log(cars)
// cars.shift();         // start to remove 
// console.log(cars)

// // includes
// let inclu=cars.includes("bolero");  // bolero exist in cars true
// console.log(inclu);

// // Concat and reverse Arrays

// let color = ["red","yellow","pink","blue","black"];
// let color1= ["white","orange","purple","green"];
// let merge = color.concat(color1);  //concat two Arrays
// let reverse = color.reverse();    // reverse arrays
// console.log(merge);
// console.log(reverse);

// // slice method arrays
// console.log(color1.slice(1));   
// console.log(color1.slice(-2));   

// splice method remove ---changes in original arrays
// let color3 = ["red","yellow","pink","blue","black","white","orange","purple","green"];

// console.log(color3.splice(4));  // 4-black to end
// console.log(color3.splice(0,1)); // return remove color
// console.log(color3.splice(0,1,"grey","navyblue"));  // start -- grey navyblue
// console.log(color3.splice(1,0,"burgundy"));   // add on 1 index 
// console.log(color3)


// Sort method
// let days = ["monday","saturday","friday","thursday"];  //ascending order sort
// let sorted = days.sort();
// console.log(sorted);

// questions
// let start = ["january","july","march","august"];
// let final = start.splice(0,2,"july","june");
// console.log(final);
// console.log(start);


// let index =['c','c++','html','javascript','python','java','c#','sql'];

// let r = index.reverse().indexOf('javascript');
// console.log(r)

// Arrays refrences 
// [1] == [1]    false
// [1] === [1]    false

// let arr = ['a','b'];
// let arrCopy=arr;
// arrCopy.push('c');
// console.log(arr);
// console.log(arr == arrCopy);  // true


// Q1.
// let array=[7,9,0,-2];
// let n=3;
// let ans=array.splice(0,n);
// console.log(ans);

// Q2.
// let arr1 = [7,9,0,-2];
// let n1=3;
// let ans1 = arr1.splice(arr1.length-n1);
// console.log(ans1);
// console.log(arr1);

// Q3.

// let str = prompt("enter a string :");
// if (str.length == 0) {
//     console.log("string is empty");
// }else{
//     console.log("string is not empty")
// }

//Q4
// let str = "ApNaCoLlEgE";
// let idx = 2;

// if (str[idx]==str[idx].toLowerCase()) {
//     console.log("character is lowercase")
// }else{
//     console.log("character is not lowercase")
// }