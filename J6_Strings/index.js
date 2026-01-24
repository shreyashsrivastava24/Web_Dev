let a = "Harry"
//character access
console.log(a[1]);
console.log(a[2]);
console.log(a[0]);
console.log(a[3]);
console.log(a[4]);
//console.log(a[5]); //undefined

console.log(a.length) //array ki length btata i.e, 5

let real_name ="Harry"
let friend = "Rohan"
console.log("I am " + real_name + " and my friend is " + friend)
//template literals...to simplify our life
console.log(`I am ${real_name} and my friend is ${friend}`)

let b = "Shreyash"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length) //8
console.log(b.slice(1,7)) //hreyas
console.log(b.slice(1)) //hreyash...index 1 to last
console.log(b.replace("sh","77")) //Shreya77...agr do exactly same occurences ho to first wala replace hoga
console.log(b.concat(a, "Yashi")) //ShreyashHarryYashi
console.log(b.concat(a)) //ShreyashHarry

//agr white space remove krni ho string se
// let name = " harry"
// let newname = name.trim()

//ek bar string bna di aur uska memory allocation ho gya to wo original string change nhi hoti (immutable)
//above can be used to create new strings but original cant be changed
// console.log(b) //Shreyash

//Explore more on ur own
let c = "Rohan"
c.charAt(0) //R
c.indexOf("ha") //2
c.indexOf("zz") //-1
c.startsWith("Ro") //true
c.startsWith("ao") //false
c.endsWith("an") //true
