const fs = require('fs');
const express = require('express');
const port = 8000;

const app = express();

const home = fs.readFileSync(`${__dirname}/index.html`,"utf-8")
// console.log(home)

app.get("/",(req,res)=>{
    res.status(200).send(home)
})

app.listen(port,()=>{
    console.log(`App is Running on http://localhost:${port}`)
})