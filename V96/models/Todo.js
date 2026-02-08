// models ka matlab hota hai:
// aap apna data kis structure (schema) ke hisaab se store karna chahte ho
// Schema = data ka blueprint jo batata hai:
// kaunse fields (keys jaise title, desc, isDone) honge,
// unka data type kya hoga,
// aur unpe kaunse rules/conditions lagu honge

// Creating schema

import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  // yahan hum conditions impose kar sakte hain taaki
  // application secure rahe
  // warna bina schema ke koi title me 77, true, ya kuch bhi daal sakta hai, agr kisi ne glt dala to automatic type conversion ho jayega if it is possible
  // Mongoose ye validation automatically handle karta hai
  // jabki MongoDB native package me hume if-else manually likhne padte

  title: String,
  //title: {type: String, required: true, default: "Hey"},//we can create object schema as well and hey is default title here
  desc: String,
  isDone: Boolean,
  days: Number
});

// Model banaya jo schema ke through database se interact karega
export const Todo = mongoose.model("Todo", TodoSchema);

//So basically mongoose hme validation k saath crud operations krne me mdd krta hai