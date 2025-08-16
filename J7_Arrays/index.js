//strings are immutable but arrays are mutable

let arr = [1,2,4,5,7]
//index 0,1,2,3,4

arr[0] = 5666 // ye cheez string me nhi kr skte

// console.log(arr,typeof arr); //js me array ka type object

// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

//string me convert
console.log(arr.toString())

//comma k jgh and aa jayega
console.log(arr.join(" and "))

// last elem nikalega here 7...original array altered
console.log(arr.pop())

//first elem nikalega
console.log(arr.shift())

// last me add kr dega new element
arr.push(100)
arr.push("wow")
console.log(arr)

// starting me add kr dega
arr.unshift("yashi")
console.log(arr)

// deletes an element...but length remains same as memory to allocate ki gyi hai but wha pe value nhi hai
delete arr[5]
console.log(arr.length)
console.log(arr)

//Note: Keval ye method aisa hai jo existing array ko change nhi krta
//combines a1,a2,a3
//new array create kr skte iss se
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7.8,9]
a1.concat(a2,a3)
console.log(a1) //[1,2,3]

// let a =[7,9,8]
//a.sort() //sort kr dega

// let numbers = [1,2,3,4,5]
//index 1 to 3 hta dega array se
// numbers.splice(1,3) 
// console.log(numbers) //[1,5]

// let numbers = [1,2,3,4,5]
// ab un hte hue elements ki jgh inhe add kr dega
// numbers.splice(1,3,222,333)
// console.log(numbers) //[1,222,333,5]

//slice out krta
let num = [1,2,3,4]
num.slice(2) //[3,4] sliced from index 2
num.slice(1,3) //[2,3] sliced out from index 2 excluding index 3

//reverses the elements in source array... reverse()
