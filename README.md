# download-url 
download-url is a download toolkit which support both http and https URL, to check and download file by given URL, also resolve a promise when it is done

## Install

```
$ npm install --save download-url
```


## Usage

Chain version

```js

var _d = new downloadAPI(url)

_d.setPath(path).start('abc.mp4').then(function(result){

  console.log('result: ', result)

},function(error){

  console.log(error)
})


```


## API
### constructor
Giving download url as parameter, and start check up if it is work and downloadable. 
```js
var downloadAPI = require('download-url');
downloadAPI("www.abc.jpg")
```

### setPath("/upload/directary")
Giving destination directory as parameter, which needed to be created before storing the download file. 
```js
var downloadAPI = require('download-url');
downloadAPI("www.abc.jpg")
downloadAPI.setPath(path)

or 

downloadAPI("www.abc.jpg").setPath("/upload/directary")
```


### start()
It is a function which return a promise, to trigger download, from the given URL to the given Directary and process the url validate checkup before download.
```js
var downloadAPI = require('download-url');
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