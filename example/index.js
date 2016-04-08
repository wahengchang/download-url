
var http = require('http');
var fs = require('fs');
var downloadAPI = require('../index');



var server = http.createServer(function (request, response) {


  var url = "https://www.google.com.tw/images/nav_logo242.png"
  var path = __dirname

  //  path have to be be a existed directory
  //  var path = __dirname + "/upload"



  //this is a example of function version 
  //var API = downloadAPI(url)
  //API.setPath(path)
  //API.start().then(function(result){



  //this is a example of chain version 
  downloadAPI(url).setPath(path).start().then(function(result){
  
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(JSON.stringify(result));

  },function(error){

    response.writeHead(400, {"Content-Type": "text/plain"});
    response.end(JSON.stringify(error));
  })

});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
