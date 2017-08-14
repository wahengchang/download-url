
var https = require('https');
var http = require('http');
var downloadableAPI = require('url-valid');
var fs = require('fs');


  function showDownloadingProgress(received, total) {
      var percentage = ((received * 100) / total).toFixed(2);
      // process.stdout.write((platform == 'win32') ? "\033[0G": "\r");
      // process.stdout.write(percentage + "% | " + received + " bytes downloaded out of " + total + " bytes.");
        
      process.stdout.write(percentage + "% | " + received + " bytes downloaded out of " + total + " bytes.\r");
  }

  function getUrlFileName(url) {
    return url.split('/').pop()
  }

  function downloadToLocal(_downloadlink, _path, _httprequest, _fileName) {
    
    var downloadlink = _downloadlink
    var path = _path
    var httprequest = _httprequest

    var received_bytes = 0;
    var total_bytes = 0;

    var __fn = _fileName || getUrlFileName(downloadlink)

    return new Promise(function(resolve, reject) {
        var dist = path + "/" +__fn
        var readableStream = fs.createWriteStream(dist);

        httprequest.get(downloadlink, function(res) {
          res.pipe(readableStream);
          res.on('data', function(chunk) {
              received_bytes += chunk.length;
              showDownloadingProgress(received_bytes, total_bytes);
          })
          readableStream.on('finish', function() {
            readableStream.close(function(){
              resolve({dist:dist})
            })
          })
        }).on('error', function(err) {
          reject(err)
          fs.unlink(dist); 
        }).on('response', function(data) {
          total_bytes = parseInt(data.headers['content-length']);
        })
    })
  }


function isDownloadable(url) {
    return new Promise(function (resolve, reject) {
      downloadableAPI(url, function (err, valid) {
        if (err){
          reject(err)
        }
        else{
          if(valid) resolve()
            else{
              this.errMsg ="linke is not downloadable"
              reject({errMsg:this.errMsg})
            }
        }
      });

    })
}


function downloadAPI(url0) {

  this.downloadlink = url0

  this.httprequest 

  this.path = "" 

  this.isStart = true

  this.errMsg = ""

  if(isHttps(url0) == 1) 
    this.httprequest = https
  else if(isHttps(url0) == 0) 
    this.httprequest = http
  else {
    console.log(" error on http or https")
    this.isStart = false
    this.errMsg = " error on http or https"
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

}

downloadAPI.prototype.setPath = function(str) {
    if(fs.existsSync(str)){
      this.path = str
    }
    else{
      console.log("path is not existed, please create it before save it")
      this.errMsg = "path is not existed, please create it before save it"
    }
    return this
  }

downloadAPI.prototype.start = function(fileName){
    var _url = this.downloadlink
    var _path = this.path
    var _httprequest = this.httprequest
    var _isStart = this.isStart

    return new Promise(function(resolve, reject) {
      isDownloadable(_url).then(function(result1){
        if(!_isStart) reject ({errMsg: '!_isStart'})
          else return downloadToLocal(_url, _path, _httprequest, fileName)
      }).then(function(result2){
        resolve(result2)
      },function(error){
        reject(error)
      })
    })
  }


module.exports = downloadAPI

