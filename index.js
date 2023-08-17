//!---- 1) sending a html page in response
//const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hiii pb999')
// //   res.end(`<!DOCTYPE html>   !Sending html file as input with backticks.
// //   <html lang="en">
// //   <head>
// //       <meta charset="UTF-8">
// //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //       <title>Node js</title>
// //       <style>
// //           body{
// //               background-color: aqua;
  
// //           }
// //           .container{
// //               border: solid 1pt black;
// //               border-collapse: collapse;
// //               width: fit-content;
// //               font-size: medium;
// //               text-align: center;
// //               font-weight: bolder;
// //               color: green;
// //           }
         
// //       </style>
// //   </head>
// //   <body>
// //       <div class="container">
// //           <h4 id="h4">This is demonstration of node js</h4>
// //           <p>Welcome to learning</p>
// //       </div>
    
// //   </body>
// //   </html>`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




// !----- 2) some module operations in node js
//  const fs = require("fs")
// var text = fs.readFileSync("sometxt.txt","utf-8")
// // console.log(text)
// text=text.replace("Lorem","Shivram")
// console.log("content of file is")
// console.log(text)
// console.log("creating a file")
// fs.writeFileSync("shiv.txt",text)



//!-----3)sending html file as response
// const http = require('http')
// const fs = require('fs')
// const file = fs.readFileSync('index.html')

// const server =http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.end(file)
// })

// server.listen(2000,'127.0.0.1',()=>{
//     console.log("listening on port 2000")
// })


//!------ 4)custom backend
//in new directory