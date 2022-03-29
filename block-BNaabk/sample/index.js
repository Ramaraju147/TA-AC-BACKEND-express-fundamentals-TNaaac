const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("welcome to home page")
})

app.listen(3000, (req,res) => {
    console.log("server is listening on port 3000")
})