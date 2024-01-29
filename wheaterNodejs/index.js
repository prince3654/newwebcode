const http = require("http");
const fs = require ("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html","utf-8");

const server = http.createServer((req,res)=> {
    if(req.url=="/"){
        const request = require('request');
        
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
    }
    
})