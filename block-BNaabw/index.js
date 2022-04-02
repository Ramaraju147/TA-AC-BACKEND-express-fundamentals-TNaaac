const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())

app.use(logger('dev'));

app.use(cookieParser())

app.use(express.urlencoded({extended:false}))

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/pages',(req,res) => {
    res.sendFile(__dirname+'/pages.html')
})

app.use((req,res,next) => {
    res.send('Page not found')
})

app.listen('4000',() => {
    console.log('Server is listening on port 4000')
})