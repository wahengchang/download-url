
var http = require('http');
var downloadAPI = require('../index');



var server = http.createServer(function (request, response) {

	// var url = "http://abc"
	var url = "https://www.google.com.tw/images/nav_logo242.png"
	var path = "/newpath"

	//var API = downloadAPI(url)
	//API.setPath(path)
	//API.start().then(function(result){

	//this is a example of chain promise
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
