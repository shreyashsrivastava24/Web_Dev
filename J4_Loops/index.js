// let a = 1;
// for (let i = 0;i < 100; i++){
//     console.log(a+i);
// }

// let obj = {
//     name: "Shreyash",
//     role: "Programmer",
//     company: "Self AI"
// }

//for in loop se key, value print
// for (let key in obj){
//     console.log("key=",key, "value=",obj[key]);
// }

//for of loop , used for iterable data structure like array,string
//Initialisation and updation automatically

// let str = "ApnaCollege";

// let size = 0;

// for (let val of str) { // i iterator-> characters
//     console.log("val=",val);
//     size++;
// }

// console.log("string size= ",size); //11

// for(const c of"Harry"){
//     //ek ek krke sare characters print ho jayenge line by line
//     console.log(c)
// }

// let i=0;
// while(i<6){
//     console.log(i)
//     i++;
// }

//km se km ek bar run ho to do-while use
// let i=10;
// do {
//     console.log(i)
//     i++;
// } while(i<6); //10

// Ques>Create a game where you start with any random game number.Ask the user to keep guessing he game number until the user enters correct value.
// Note : Prompt by default string hota
//Sol> 
// let gameNum =25;
// let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum){
// userNum = prompt("You entered the wrong number.Guess again: ");
// }

// console.log("Congratulations, you entered the right number")