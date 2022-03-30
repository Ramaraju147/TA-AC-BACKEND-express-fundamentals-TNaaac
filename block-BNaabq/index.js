const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(cookieParser())
app.use(logger('dev'))

app.use('/about', (req,res,next) => {
    res.cookie('username','rohan');
    console.log(req.cookies);
    next()
})



app.listen(4000,() => {
    console.log("Server is listening on port 4000")
})