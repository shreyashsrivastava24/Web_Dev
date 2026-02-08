const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

// HTTP Request = browser/client ka server se baat karna

// Flow: Browser → Request → Server → Response → Browser

// Request me 3 cheezein hoti hain:
// 1. Method → kya kaam (GET, POST, PUT, DELETE)
// 2. URL    → kahan bhejna
// 3. Body   → data (sirf POST/PUT me)

// Methods easy words me:
// GET     → data dekhna / lana
// POST    → naya data bhejna
// PUT     → purana data badalna
// DELETE  → data hataana

const app = express();
const port = 3000;

//post request use krne k liye
app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

//handling different types of requests
//res.send() → client ko response bhejne k liye
//console.log() → server console me message dikhane k liye
//get request is used to fetch data from server
app.get("/", (req, res) => {
  console.log("hey its a get request");
  res.send("Hello World get req!");
});
//post request is used to send data to server
app.post("/", (req, res) => {
  console.log("hey its a post request");
  res.send("Hello World post req!");
});
//put request is used to update existing data on server
app.put("/", (req, res) => {
  console.log("hey its a put request");
  res.send("Hello World put req!");
});
//delete request is used to delete data from server
app.delete("/", (req, res) => {
  console.log("hey its a delete request");
  //res.send se text
  res.send("Hello World delete req!");
});

app.get("/index", (req, res) => {
  console.log("hey its index")
  //res.sendfile se html file serve krte hain
  //__dirname se project ki directory milti hai
  res.sendFile('templates/index.html',{root: __dirname})
});

app.get("/api", (req, res) => {
  //res.json se json data bhejte hain
  res.json({a:1,b:2,c:3,d:4,"name":"john"});
});

//we can do request chaining ,chaining me ek hi route par multiple request handle kr skte hain
//example of request chaining
//app.get("/", (req,res) => {
//  res.send("get request");
//}).post("/", (req,res) => {
//  res.send("post request");
//}).put("/", (req,res) => {
//  res.send("put request");
//}).delete("/", (req,res) => {
//  res.send("delete request");
//});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
