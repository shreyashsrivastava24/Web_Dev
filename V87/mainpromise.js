import fs from "fs/promises"

//mai module k andr hu iss liye directly await use kr skta hu
let a = await fs.readFile("sherry.txt")

let b = await fs.writeFile("sherry.txt","\n\n\nthis is amazing promise")
console.log(a.toString(),b)
