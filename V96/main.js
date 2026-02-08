import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

//mongodb se connect kr liya
let conn = await mongoose.connect("mongodb://localhost:27017/todo")
// slash k baad todo likh diya pr todo name ka databse hai nhi to wo automatically bn jayega
const app = express();
const port = 3000;

//so basically ho ye rha ki jaise hi main iss endpoint pe ja rha hu to ye wala code chl rha aur todo ko insert kr de rha todo wale databse me
app.get('/', (req, res) => {
  const todo = new Todo({
    title: "Hey first todo",
    desc: "Description of this todo",
    isDone: false,
    days:3
  })
  todo.save()
  res.send("Hello World!")
});

app.get('/a', async(req, res) => {
  let todo = await Todo.findOne({})
  console.log(todo)
  res.json({title:todo.title,desc:todo.desc})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
