const express = require("express");
const app = express();
const port = 3000;

//public folder ko publicly available bana deta hai 
app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path,handler)
app.get("/", (req, res) => {
  res.send("Hello Worldddd222!");
});

app.get("/about", (req, res) => {
  res.send("Hello do u know me!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contactme babes!");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog!");
});

// app.get('/blog/intro-to-js',(req,res)=>{
//logic to fetch intro-to-js from db
//   res.send('Hello intro to js!!')
// })

// app.get('/blog/intro-to-python',(req,res)=>{
//logic to fetch intro-to-python from db
//   res.send('Hello naagdev!!')
// })

//req.params ek object hota hai jo url parameters ko prapt karta hai
//req.query ek object hota hai jo query string parameters ko prapt karta hai ;queston mark ke baad wale parameters
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
