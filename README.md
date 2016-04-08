# downloadAPI 


## Install

```
$ npm install --save downloadAPI
```


## Usage

Chain version

```js
var downloadAPI = require('downloadAPI');
var url = "http://abc"
var path = "/newpath"

	downloadAPI(url).setPath(path).start().then(function(result){
		//...... do somthing
	},function(error){
		//...... do somthing
	})

```

Function version

```js
var downloadAPI = require('downloadAPI');
var url = "http://abc"
var path = "/newpath"

	var API = downloadAPI(url)
	API.setPath(path)

	API.start().then(function(result){
		//...... do somthing
	},function(error){
		//...... do somthing
	})

```


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)