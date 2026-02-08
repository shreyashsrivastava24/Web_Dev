//initial code copy kr lo express js ki site se
//nodemon main.js se server start
const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
//importing blog router
const blog = require('./routes/blog')

//request aai to sbse pehle ye middleware chalega jo ki check krega ki public folder me wo file hai ya nhi aur req-res cycle yhi khatam ho jayegi agr file mil jati hai
//app.use(express.static('public'))

//using blog router for /blog path
app.use('/blog', blog)

//Middleware is a function which has access to req,res and next object
//Middleware se mai req ko phle hi mdify kr skta hu ya kuch aur kr skta hu,sari req k liye koi cheez krna chahte ho to middleware bna skte ho,sari req check krna chahte ho ki logged in bhi hai user ya nhi
//Middlware1(made by us without public folder)
//Middleware1-logger for our application
app.use((req,res,next) => {
    console.log(req.headers)
    req.sherry = "I am Sherry bhai" //req object me naya property add kr diya
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    //date.now() gives timestamp,req.method ki info milegi ki konsa method use kiya
    console.log(`${Date.now()} is a ${req.method}\n`)
    //res.send('Hacked by m1') //response bhej di to aage nhi jayega
    //res.send k baad next likhne se error aayegi as response already bhej di hai

    next() //next middleware ko call krne k liye
    //next agr nhi likhenge to yahi pe req-res cycle khatam ho jayegi,req yhi fss jayegi
})

//Middlware 2
app.use((req,res,next) => {
    console.log('m2')
    req.sherry = "I am Sherry bhai baad wala chl gya as baad wali request me overwrite kr diya"
    next() //next middleware ko call krne k liye
})

//rotes handlers
app.get('/', (req, res) => {
    //res.send sends response to client
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!' + req.sherry) //req object me jo naya property add kiya tha uska use kr skte hai,req modify ho chuka hai middleware1 me
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//----------Types of Middlewares in Express js guide----------