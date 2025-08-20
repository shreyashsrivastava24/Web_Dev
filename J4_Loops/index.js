let a = 1;
// for (let i = 0;i < 100; i++){
//     console.log(a+i);
// }

let obj = {
    name: "Shreyash",
    role: "Programmer",
    company: "Self AI"
}

//for in loop se key, element print
for (const key in obj){
    const element = obj[key];
    console.log(key)
    // console.log(key,element)
}

//for of loop , used for iterable data structure like array,string
for(const c of"Harry"){
    //ek ek krke sare characters print ho jayenge line by line
    console.log(c)
}

// let i=0;
// while(i<6){
//     console.log(i)
//     i++;
// }

//km se km ek bar run ho to do-while use 
let i=10;
do {
    console.log(i)
    i++;
} while(i<6); //10
