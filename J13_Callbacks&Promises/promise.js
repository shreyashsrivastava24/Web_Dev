//solution to callback hell is promises
//promise of code execution

console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random no was supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry") //ye promise run ho chuki kam khtm iska, resolve kr do harry value k saath
        }, 3000);
    }
})

//koi network req ya to reject ho skti hai ya accept ho skti hai, if accepted to aap chaoge ki uska data aa jaye so .then fn use kroge wrna .catch use kroge error handle krne  k liye 
// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random no was supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2") //ye promise run ho chuki kam khtm iska, resolve kr do harry value k saath
        }, 1000);
    }
})

//promise.all sare promises k resolve hone ka wait krega and return krega result of promises in form of array
//dono promises resolve hongi tbhi result array aayega
// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })

// promise k settle hone ka ye mtlb hai ki ya to resolve hogi ya reject hogi and resolve hone ka ye mtlb hai ki ek value milnni chiye bina error k
//promise.allSettled means chahe kuch v aa jaye result chahe resolve ho ya reject ho chl pde dono promises
//dono ki status aur value mil jayegi
// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })

//yha hm race lgwa rhe promises ki jo v promise settle ho gyi uska outcome result bn jayega
// let p3 = Promise.race([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })