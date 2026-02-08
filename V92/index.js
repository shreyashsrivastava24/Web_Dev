const express = require("express");
const app = express();
const port = 3000;

//ejs ek temlate engine h jisme hum html k andar dynamic content dal skte h jaise ki variables wagaira
// Sets EJS as the template engine so Express can render .ejs view files
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //variables jo template me pass krne
  let siteName = "Adidas";
  let searchText = "Search Now";
  let arr = ["Hey",3,5,7,9]
  //ejs use kiya iss liye res.render
  res.render("index", {siteName:siteName,searchText:searchText,arr});
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why and when?";
  let blogContent = "Its a very popular brand";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
