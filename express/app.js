const express = require("express")

const fs =require("fs")
const app=express()
const port=3000
const path = require("path")

//express stuffs
//for providing ststic files in our web
app.use('/static',express.static('static'))
app.use(express.urlencoded())//middle ware for storing the data
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

//pug stuffs
//pug templete engine 
app.set('view engine','pug')

//set views directory
app.set('views',path.join(__dirname,'views'))



//end point of our pug
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
// })

// app.get("/",(req,res)=>{
//     res.status(200).send("hello")
// })

// app.post("/",(req,res)=>{
//     res.status(200).send("hello post req")
// })

//end point of our pug
app.get('/',(req,res)=>{
    const cont="A simple reg page "//some data to send
    const params = {'title':"this is pug","content":cont}//parameter for our pug
    res.status(200).render('index.pug',params)//sending parameters to our page
})

app.post('/',(req,res)=>{
    
    console.log(req.body);
    Name = req.body.name;
    age = req.body.age;
    phone=req.body.phone;
    let out=`the entered input is ${Name},${age},${phone}`
    fs.writeFileSync('output.txt',out);//for storing data inside a file
    const params = {'message':'Your form saved'}//parameter for our pug
    res.status(200).render('index.pug',params)//sending parameters to our page
})



//server 
app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})