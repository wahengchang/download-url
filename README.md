# downloadAPI 
downloadAPI to download file from URL to local by http/https request in nodejs, and resolve a promise when it is done
[npm]](https://www.npmjs.com/package/downloadAPI)


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


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)