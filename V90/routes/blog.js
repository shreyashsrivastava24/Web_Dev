const express = require('express')
const router = express.Router()

//koi v cheez aisi krni ho ji ki hr route k liye chle then we can use middlewares

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Blogs')
})

module.exports = router
