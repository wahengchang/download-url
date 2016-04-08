
var https = require('https');
var http = require('http');
var fs = require('fs');

function downloadAPI(url0) {

  var downloadlink = url0

  var httprequest 

  var path = "" 

  var isStart = true

  var errMsg = ""

  setHttpRequest(url0)

  function setHttpRequest(t) {
    if(isHttps(t) == 1) 
      httprequest = https
    else if(isHttps(t) == 0) 
      httprequest = http
    else {
      console.log(" error on http or https")
      isStart = false
      errMsg = " error on http or https"
    }  
  }

  function setPath(str) {
    if(fs.existsSync(__dirname+str)){
      path = str
    }
    else{
      console.log("path is not existed, please create it before save it")
      errMsg = "path is not existed, please create it before save it"
    }
    return this
  }

  function getUrlFileName(url) {
    return url.split('/').pop()
  }

  function isHttps(url) {

    if (url.indexOf("http://") == 0){
      return 0;
    }
    else if(url.indexOf("https://") == 0) {
      return 1;
    }
    else{
      return -1;
    }

  }

  function downloadToLocal() {
    return new Promise(function(resolve, reject) {

        if(!isStart) reject ({errMsg: errMsg})

        var filename = getUrlFileName(downloadlink)

        var dist = __dirname + path + "/" +filename
      
        var readableStream = fs.createWriteStream(dist);

        var request = httprequest.get(downloadlink, function(response) {

          response.pipe(readableStream);

          readableStream.on('finish', function() {

            readableStream.close(function(){
              resolve({dist:dist, errMsg:errMsg})
            });  // close() is async, call cb after close completes.
          
          })

        }).on('error', function(err) { // Handle errors

          reject(err)
          fs.unlink(dest); 

        });

    })
  }

  return {
    start: downloadToLocal,
    isHttps: isHttps,
    setPath: setPath,
    getUrlFileName: getUrlFileName
  }
}

module.exports = downloadAPI

