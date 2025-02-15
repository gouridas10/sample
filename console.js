const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/',(req,res) => {res.send('Hello world')})

mongoose.connect('mongodb://localhost:27017')
.then(() => {
    console.log('connected to mongoDB')
})
.catch((err) => console.log(err));

app.listen(3000,() => {console.log('listening on port 3000')})

app.post('/',(req,res) => {res.send('Hello world')})

