let a = 1;
// for (let i = 0;i < 100; i++){
//     console.log(a+i);
// }

let obj = {
    name: "Shreyash",
    role: "Programmer",
    company: "Self"
}

//for in loop
for (const key in obj){
    const element = obj[key];
    console.log(key,element)
}
//key element print

for (const key in obj){
    const element = obj[key];
    console.log(key)
}
//key print

//for of loop
for(const c of"Harry"){
    console.log(c)
}
//sare characters print ho jayenge line by line

// let i=0;
// while(i<6){
//     console.log(i)
//     i++;
// }

//km se km ek bar run ho to iska use 
let i=10;
do {
    console.log(i)
    i++;
} while(i<6); //10
