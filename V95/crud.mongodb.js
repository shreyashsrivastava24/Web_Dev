// CRUD OPERATIONS
use("CrudDb")
// console.log(db)-->CrudDb

db.createCollection("courses")

// CREATE
// jitni bar run krenge utni bar document insert hoga
// db.courses.insertOne({
//     name: "Harry courses",
//     charges: 0,
//     price: "free",
//     projects: 12
// })
// db.courses.insertMany([
//   {
//     "name": "Harry Courses",
//     "price": 0,
//     "priceLabel": "free",
//     "projects": 12
//   },
//   {
//     "name": "Sigma Web Dev Bootcamp",
//     "price": 499,
//     "priceLabel": "paid",
//     "projects": 25
//   },
//   {
//     "name": "DSA Mastery",
//     "price": 0,
//     "priceLabel": "free",
//     "projects": 40
//   },
//   {
//     "name": "React Complete Guide",
//     "price": 299,
//     "priceLabel": "paid",
//     "projects": 18
//   },
//   {
//     "name": "Node + Express Backend",
//     "price": 199,
//     "priceLabel": "paid",
//     "projects": 15
//   },
//   {
//     "name": "MongoDB Crash Course",
//     "price": 0,
//     "priceLabel": "free",
//     "projects": 8
//   }
// ]
// )

//READ
// let a = db.courses.find({price: 0})
// console.log(a)//return docs
// console.log(a.count())//returns total such docs
// console.log(a.toArray())//sare docs array me

// let b = db.courses.findOne({price: 0})//returns first one
// console.log(b)

//UPDATE
// db.courses.updateOne(
//   { price: 0 },
//   { $set: { price: 100 } }
// )
//sbka update hoga
// db.courses.updateMany(
//   { price: 0 },
//   { $set: { price: 1000 } }
// )


//DELETE
//db.courses.deleteOne({price:1000})
//sb 199 wale htt gye
//db.courses.deleteMany({price:199})