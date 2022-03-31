const express = require('express');

const app = express();

app.use((req,res,next) => {
    if(req.url==='/admin'){
        return next('Unauthorized')
    }
    next();
})

app.get('/',(req,res) => {
    res.send('Home page')
})

app.get('/about',(req,res) => {
    res.send('About page')
})

app.use((req,res,next) => {
next("Page not found")
})

app.use((err,req,res,next) => {
   res.send(err)
})

app.listen('4000',() => {
    console.log('Server is listening on port 4000')
})