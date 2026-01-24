/*
Node.js automatically provide karta hai ye Global Objects (bina likhe):
- require() = Function to import modules
- module = Current module ki info
- module.exports = Export karne ke liye
- __dirname = Current folder ka path
- __filename = Current file ka path
- exports = Shorthand for module.exports

Ye sab sirf Node.js me available hote hain, browser me nahi
*/

const a = require("./mymodule2.js")
console.log(a, __dirname, __filename);