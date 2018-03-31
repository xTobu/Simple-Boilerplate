var path = require('path');
var webpack = require('webpack');

module.exports = {
	
	//很酷的寫法 用name來決定path
	// entry: {
	//   'build/application/bundle': './src/application', // will be  ./build/application/bundle.js,
	//   'build/library/bundle': './src/library`'// will be  ./build/library/bundle.js
	// },
	// output: {
	//   path: './',
	//   filename: '[name].js'
	// }

	//一次多進入點  多輸出點
	entry: {
		page: './src/page.js',
		index: ['./src/index.js'],
	},
	output: {
		// when using multiple entry points
		// Make sure to use [name] or [id] in output.filename		
		path: path.resolve(__dirname, 'dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader?indentedSyntax',
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
				
			},
			{
				// test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
				test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
		],
	},
	stats: {
		colors: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],

	devtool: 'source-map',
	devServer: {
		port: 8000,
		//noInfo: true,
	},
};
