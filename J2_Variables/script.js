// js automatically detects variable type
// $ and underscore se variable name start ho skta
// var a = 5; 
// a = a+1; //allowed
// var b = 6;
// var c = "Harry";
// var 55a = "rog" ; //not allowed

// {
//     var a = 66;
//     console.log(a) //66 as var is globally scoped
// }
// console.log(a)  //66 as var is globally scoped

// var is globally scoped while let and const are block scoped,...jb v modern js code likhe to let use kre as let ko bahr likh diya to wo global variable bn jayega and if in a block then block scoped

let a = 5;
// a = a+1;
let b = 6;
let c = "Harry";
let _a = "Shubham";

{
    let a = 66;
    console.log(a) //66
}
console.log(a)  //5

// console.log(a + b + 8)

// variable type btata
// console.log(typeof a, typeof b, typeof c)

// const a1 = 6;
// a1 = a1 + 1; this is not allowed bcoz a1 is const

//data types
let x = "shreyash";
let y = 22;
let z = 3.55;
const p = true; //iski value change nhi ho skti
let q = undefined;
let r = null; //js null ka data type object dikhata h
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// object print ho jayega, object means agr bhot sari cheeze likhni hai kisi entity k bare me to hum likh skte h
let o = {
    "name": "sheri",
    "job code": 5600,
    "is_handsome": true
}
console.log(o);

//iss trh object ko alter kr skte,new add kr skte
o.salary = "100cr"
console.log(o);
o.salary = "500cr"
console.log(o);