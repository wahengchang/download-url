# downloadAPI 
downloadAPI to download file from URL to local by http/https request in nodejs, and resolve a promise when it is done.

## Install

```
$ npm install --save downloadAPI
```


## Usage

Chain version

```js
var downloadAPI = require('downloadAPI');
var url = "http://abc"
var path = _dirname + "/upload"

downloadAPI(url).setPath(path).start().then(function(result){
	//...... file is downloaded to local
},function(error){
	//...... do somthing
})

```

Function version

```js
var downloadAPI = require('downloadAPI');
var url = "http://abc"
var path = _dirname + "/upload"

var API = downloadAPI(url)
API.setPath(path)

API.start().then(function(result){
	//...... file is downloaded to local
},function(error){
	//...... do somthing
})

```


## API
### constructor
Giving download url as parameter, and start check up if it is work and downloadable. 
```js
var downloadAPI = require('downloadAPI');
downloadAPI("www.abc.jpg")
```

### setPath("/upload/directary")
Giving destination directory as parameter, which needed to be created before storing the download file. 
```js
var downloadAPI = require('downloadAPI');
downloadAPI("www.abc.jpg")
downloadAPI.setPath(path)

or 

downloadAPI("www.abc.jpg").setPath("/upload/directary")
```


### start()
It is a function which return a promise, to trigger download, from the given URL to the given Directary and process the url validate checkup before download.
```js
var downloadAPI = require('downloadAPI');
downloadAPI("www.abc.jpg")
downloadAPI.setPath(path)
downloadAPI.start().then(function(result){
    //...... file is downloaded to local
},function(error){
    //...... do somthing
})

or 

downloadAPI("www.abc.jpg").setPath("/upload/directary").then(function(result){
    //...... file is downloaded to local
},function(error){
    //...... do somthing
})
```


### isDownloadable(url)
It is a function which return a promise, to check if the url parameter downloadable.
```js
var API = downloadAPI(url)
API.isDownloadable(url).then(function(isDownloadable){
    //...... file is downloaded to local
},function(error){
    //...... do somthing
})
```


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)