
var http = require('http');
var fs = require('fs');
var downloadAPI = require('../index');

var url = "https://banana-video.s3.amazonaws.com/20833593_1624520684239558_8492163269279088640_n.mp4"
var path = __dirname

//  path have to be be a existed directory
//  var path = __dirname + "/upload"



//this is a example of function version 
//var API = downloadAPI(url)
//API.setPath(path)
//API.start().then(function(result) .. ...
  
// API.isDownloadable(url).then(function(result) . ....



//this is a example of chain version 
var _d = new downloadAPI(url)

_d.setPath(path).start().then(function(result){

  console.log('result: ', result)

},function(error){

  console.log(error)
})

