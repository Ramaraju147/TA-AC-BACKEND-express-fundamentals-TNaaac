const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(logger('tiny'));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(cookieParser());

app.use((req,res,next) => {
    let count = req.cookies.count;
    if(count){
        res.cookie('count',count+1);
    }else{
        res.cookie('count',1);
    }
    next();
})

app.get('/',(req,res)=> {
    res.sendFile(__dirname+'/index.html')
})

app.get('/about', (req,res) => {
    res.send('My name is qwerty')
})

app.post('/form', (req,res) => {
    res.json(req.body)
})

app.post('/json', (req,res) => {
    res.json(req.body)
})

app.get('/users/:username', (req,res) => {
    let username = req.params.username;
    res.send(username);
})

app.use((req,res,next)=> {
    res.status(404).send('Page not found')
    next()
})

app.use((err,req,res,next) => {
    res.send(err);
})

app.listen('4000', ()=>{
    console.log('Server is listening on port 4000');
})