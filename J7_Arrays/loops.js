let a = [1, 93, 5, 88];

//prints array
// for(let index = 0;index<a.length;index++){
//     const element = a[index];
//     console.log(element)
// }

//for each loop
//prints value ,index ,array for each element

// a.forEach((value,index,arr)=> {
//    console.log(value,index,arr)
// })

// o/p:- 1 0 [ 1, 93, 5, 88 ]
//       93 1 [ 1, 93, 5, 88 ]
//       5 2 [ 1, 93, 5, 88 ]
//       88 3 [ 1, 93, 5, 88 ]


//for in loop...used in context of an object
//prints key ,element or both

// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)

//     }
// }

// if (Object.hasOwnProperty.call(obj, key))
// JavaScript objects prototype chain ke through aur bhi properties inherit kar lete hain.
// Example: agar tumhara obj kisi aur object se bana hai (inheritance), to uske andar extra properties bhi aa sakti hain jo tumne directly add nahi ki hoti.
// Object.hasOwnProperty.call(obj, key) check karta hai ki ye key sirf obj ki apni property hai, prototype se inherit nahi hui hai.
// Ye ek safety check hai


//for of loop
//prints all elements of a

// for (const value of a) {
//     console.log(value)
// }
