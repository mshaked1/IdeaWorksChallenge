const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'webpack-bundle.js',
		publicPath: '/build/'
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
				loaders: ['style', 'css', 'sass']
			},
      {
        test: /\.(jpg)$/,
        loader: "file-loader?name=/Assets/[name].[ext]"
      }
		]
	}
};