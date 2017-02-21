const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: __dirname + '/src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'webpack-bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
						presets: ['es2015', 'react']
				}
			},
			{
				test: /(\.css|\.scss)$/,
				loaders: ['style', 'css', 'resolve-url-loader','sass?sourceMap']
			},
      {
        test: /\.(jpg)$/,
        loader: "file-loader?name=/Assets/[name].[ext]"
      }
		]
	}
};