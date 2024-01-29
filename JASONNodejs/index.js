 const bioData ={
    name : "Prince raj",
    Sex : 'Male',
    contactNo : 8089172804
 }
 const print = console.log;
//  print (bioData.Sex);
 print (bioData);

 const jsonData = JSON.stringify(bioData);
 print(jsonData);// give undefined
//  const object1 = JSON.parse(jsonData);
//  print (object1.name);
const fs = require("fs");

// writing in file of jason type
// fs.writeFile('Jason1.json',jsonData,(err)=>{
//     print("done");
// })

// Read from jason file
fs.readFile('Jason1.json',"utf8",(err, data)=>
{print("data print \n")
    print(data);
}
)