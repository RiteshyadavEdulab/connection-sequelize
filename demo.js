var http = require('http');
var data ={name:"ritesh",age:"26",email:"ritesh@gmail.com"}
http.createServer(function(req,res){
 res.writeHead(200,{'content-type':'application/json'})
 res.write(JSON.stringify(data));
 res.end();
}).listen(2000)