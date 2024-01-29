
const fs = require ("fs");
const print = console.log;
const http = require('http');
fs.writeFile("log.txt","Heeyyyy" , (err)=>{});
const server = http.createServer((req, res)=>{
// {   print(req.headers);
    
const log =(`${Date.now()}: ${req.url} request recived\n`);
    
    fs.appendFile("log.txt",log,(err,data)=>{

    });
    // if(req.url ="/"){
    //     res.end("Hello from home page dsf");
    // }
    // else
     if(req.url ="/about"){
        res.end("Hii i am Node js in youe service\n");
    }
    else if(req.url = "/contact"){
        res.end("Hii contact me on Node js documatation");
    }
    else{
        res.end("404 Not found");
    }

    // res.end("Hello i am from other side");
});

server.listen(4888,() => {
    console.log("Listening to the port no 8000");
});