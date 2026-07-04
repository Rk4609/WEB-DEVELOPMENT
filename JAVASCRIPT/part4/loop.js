//for loops
// for(let i=1; i<=6; i++){
//     console.log(i);
// }

// dry run
// i=1 1<=6 true print 6
// i=2 2<=6 true print 5
// i=3 3<=6 true print 4
// i=4 4<=6 true print 3
// i=5 5<=6 true print 2
// i=6 6<=6 true print 1

// for(let i=5; i>=1;i--){
//     console.log(i);
// }
// dry run
// i=5  5>=1 true  print 5
// i=4  4>=1 true print 4
// i=3  3>=1 true print 3
// i=2  2>=1 true print 2
// i=1  1>=1 true print 1
// i=0  0>=1 false   stop

// Q1
// print all odd numbers 1 to 50
// for(let i=1; i<=15; i=i+2){
//    console.log(i)
// }
// console.log("backword");

// for(let i=15; i>=1; i=i-2){
//     console.log(i)
// }

// Q2   // print all even numbers 1 to 20
// for(let i=2; i<=20; i=i+2){
//     console.log(i)
// }

// console.log("backword");
// for(let i=10; i>=2; i=i-2){
//     console.log(i)
//  }


// Q3.  //  print multiplication table of 5
// for(let i=5; i<=50; i=i+5){
//     console.log(i)
// }

// let n = prompt("enter a number :");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }   


// nested loop
// for(let i=1; i<=3; i++){
//     console.log(`outer loops :${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }
//  dry run 
// outer loop 
// i=1  1<=3 true  I++   1
// j=1  1<=3 true  j++   1
//j=2   2<=3 true  j++   2
//j=3   3<=3 true  j++   3

// i=2  2<=3 true  i++   2
// j=1  1<=3 true  j++   1
//j=2   2<=3 true  j++   2
//j=3   3<=3 true  j++   3

// i=3  3<=3 true  i++   3
// j=1  1<=3 true  j++   1
//j=2   2<=3 true  j++   2
//j=3   3<=3 true  j++   3

// while loop

// let i=0;
// while(i<=20){
//     console.log(i);
//     i++;
// }

// favorite movie guess
// let favMovie = "avatar";
// let guess = prompt("guess the movie");

// while ((guess != favMovie) && (guess !="quiet")) {
//     guess =prompt("wrong guess. please try again");
// }

// if (guess == favMovie) {
//     console.log("congrats")
// }else{
//     console.log("you quiet");
// }

// Loops with Arrays

// let fruits = ["mango","banana","apple","litchi","grapes"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// i=0 mango
// i=1 banana
// i=2 apple
// i=3 litchi
// i=4 grapes

// Reverse and push

// let fruits1 = ["mango","banana","apple","litchi","grapes"];

// fruits1.push("orange");
// // Reverse
// for(let i=fruits1.length-1; i>=0; i--){
//     console.log(i,fruits1[i]);
// }

// Loops with nested Arrays

// let heroes = [['AlluArjun','Ramcharan','NTR'],['Hrithik','Salmam','Shahrukh']];

// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// let student = [['Sachin',25,'Haryana'],['Lalit',24,'Gujarat'],['Hitesh',24,'Gujarat']];

// for(let i=0; i<student.length; i++){
//     console.log(`Student info index #${i}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// for-of loop
// let fruits1 = ["mango","banana","apple","litchi","grapes"];
// for(let fruit of fruits1){
//     console.log(fruit);
// }

// for(let char of "apnaCollege"){
//     console.log(char);
// }

// nested  for-of loops

// let heroes = [['AlluArjun','Ramcharan','NTR'],['Hrithik','Salmam','Shahrukh']];
// let student = [['Sachin',25,'Haryana'],['Lalit',24,'Gujarat'],['Hitesh',24,'Gujarat']];
// for(let list of student){
//     console.log(list)
//     for(let hero of list){
//         console.log(hero);
//     }
// }

//----------------
// Todo -App (Javascript)
// check live in browser
// let todo=[];

// let req = prompt("please enter your request");

// while(true){
//     if(req == "quit"){
//         console.log('quitting app');
//         break;
//     }
//     if (req == 'list') {
//         console.log('------------')
//         for(let i=0; i<todo.length; i++){
//             console.log(i,todo[i])
//         }
//         console.log('------------')
//     }else if(req == 'add'){
//             let task =prompt("please enter the task");
//             todo.push(task);
//             console.log("Task Added");
//     }else if(req == "delete"){
//         let idx = prompt("please enter the task index to delete")
//         todo.splice(idx,1);
//         console.log("Task deleted");
//     }else{
//         console.log("wrong request");
//     }
//     req = prompt("please enter your request ");
// }
