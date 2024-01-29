const fs = require ("fs");
// const data = fs.readFileSync('text.txt', "utf8" );
// console.log(data);
// console.log("after this");


fs.readFile('text.txt','utf8', (err, data)=>
{
    console.log(data);
}
)
console.log("After the data");