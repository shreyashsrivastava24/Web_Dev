let a = [1,93,5,88]

//prints array
// for(let index = 0;index<a.length;index++){
//     const element = a[index];
//     console.log(element)
// }

//for each loop
//prints value index array for each element
// a.forEach((value,index,arr)=> {
//    console.log(value,index,arr)
// })

//for in loop...used in context of an object
//prints key element as per choice

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

//for of loop
//prints all elements of a

for (const value of a) {
    console.log(value)
}