const fs = require("fs");
// fs.writeFile('text.txt', "Hii boy", (err)=> {console.log
// ("file is created");
// console.log(err);
// });
// fs.appendFile('text.txt',"  Hey beautiful how are u my love",

// (err)=> {
// console.log("append done");
// });

fs.readFile('text.txt','utf8',(err,data)=>{

    console.log(data);
});