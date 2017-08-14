
var http = require('http');
var fs = require('fs');
var downloadAPI = require('../index');

var url = "https://video.xx.fbcdn.net/v/t42.1790-2/20833593_1624520684239558_8492163269279088640_n.mp4?efg=eyJybHIiOjQwNSwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&rl=405&vabr=225&oh=c3a258e3c26583c7aeb9e26060ce4aee&oe=599432AE"
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

_d.setPath(path).start('abc.mp4').then(function(result){

  console.log('result: ', result)

},function(error){

  console.log(error)
})

