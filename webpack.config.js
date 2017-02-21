const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'webpack-bundle.js',
		// publicPath: '/build'
	},
	// plugins: [
	// 	new webpack.HotModuleReplacementPlugin()
	// ],
	// devServer: {
	// 	hot: true,
	// 	contentBase: './build',
	// 	inline: true,
	// 	port: 3000,
	// 	stats: {
	// 		colors: true
	// 	}
	// },
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