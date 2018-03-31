# Simple-Webpack-Boilerplate  
> A lightweight boilerplate with ES6
> For WebGene technical team  

![Author](https://img.shields.io/badge/Author-Junxiang-yellow.svg)   
![Version](https://img.shields.io/badge/Version-0.1.0-blue.svg)
___
## Development
**Folder Structure**
```
.
├── ...
│
├── src		
│   ├── assets		# source
│   │   ├── css
│   │   ├── scss
│   │   └── img
│   │
│   ├── lib		# your js lib
│   │   └── ...
│   │
│   └── ???.js		# add your entry here
│
└── ...
```

**Dependencies**
 - webpack
 - HMR
 - babel-loader
 - babel-preset-es2015
 - style-loader
 - css-loader 
 - node-sass
 - sass-loader
 - url-loader
 - jquery
 - prettier


##  Setup
####  Add the js which you want to compile and bundle

```js
//webpack.config.js
module.exports  =  {
	...
	entry:  {
		page:  './src/page.js',
		index:  ['./src/index.js'],
		...
		// Add your entry here. ref:["page"]
		// If you need multiple entry points to one bundle. ref:["index"]	
	},
}
```

#### Dev
```bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm run dev

# build for production with minification
npm run prod
```
