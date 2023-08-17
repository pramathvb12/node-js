const express = require("express")
const path = require("path")
const fs = require("fs")
const app=express()
const port = 80

app.use('/static',express.static('static'))
app.use(express.urlencoded())//middle ware for storing the data

//pug stuffs
//pug templete engine 
app.set('view engine','pug')

//set views directory
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params)//sending parameters to our page
})

app.get('/info',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params)//sending parameters to our page
})


//server 
app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})