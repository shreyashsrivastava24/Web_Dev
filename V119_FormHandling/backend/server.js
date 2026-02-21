//agr aap chahte ho ki backend alg chle frontend alg chle to isko alg npm project initalize krna hoga aur agr aap chahte ho ki ye app overall ek entity ki trh chle to isme express bahr hi install kr skte......npm i express@4
//to handle cors policy (port 5173 se req port 3000 pe hit nhi kr skti as per cors policy) so.....npm i cors
//install body parser......npm i body-parser
//backend server on......nodemon backend/server.js

import express  from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000

//due to cors policy problem
app.use(cors()) 
//for using body parser
app.use(bodyParser.json())

app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.post('/', (req, res) => { 
    //req.body me hmara data aa gya ab mai isko database me le jau ya kuch v kr skta hu
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})