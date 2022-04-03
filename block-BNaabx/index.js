const express = require('express');

const app = express();

// app.use((req,res,next) => {
//     let data = ''
//     req.on('data', (chunk)=>{
//       data+=chunk;
//     })

//     req.on('end',()=>{
//         req.body = JSON.parse(data)
//     })

//     next()

// })

app.use((req,res,next) => {
    let currentTime = new Date().toLocaleTimeString()
    console.log(req.method,req.url,currentTime)
    next()
})

app.use((req,res,next) => {
    if(req.url.startsWith('/public')){
        console.log(__dirname+req.url)
        res.sendFile(__dirname+req.url);
    }
    next()
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen('4000', () => {
    console.log('Server is listening at port 4000')
})