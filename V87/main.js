const fs = require("fs")
//const fs = require("fs/promises")

console.log(fs)

console.log("starting")

//writefilesync ;ek blocking code likhta h; se aage ki lines tb tk execute nhi hongi jb tk file write na ho jaye
// fs.writeFileSync("sherry.txt", "Hello, Sherry!")

//phle ending print hoga phir file write hogi because writefile is non blocking code
//Callback ek function hota hai jo kisi kaam ke complete hone ke baad automatically call hota hai.
fs.writeFile("sherry2.txt","Shreyash2 is a good boy", ()=>{
    console.log("done")
    //reading file after writing it
    fs.readFile("sherry2.txt",(error,data) => {
        //.toString krna pda kyuki data buffer form me aata h
        console.log(error,data.toString())
        //..........callback hell tb hota h jb hum ek ke andar dusre k andr teesra and so on callback likhte jate h code ko samajhna mushkil ho jata h
    })
})

fs.appendFile("sherry.txt"," and he is a good boy", (e,d)=>{
    console.log(e,d)
})

console.log("ending")