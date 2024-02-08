const express=require('express')
const app=express()
const port=8000
const conectdb=require('./modules/conectDB')
require("dotenv").config()
conectdb()
app.listen(port, (err) => { err ? console.log(err) : console.log(`app tlisni fi ${port}`)})