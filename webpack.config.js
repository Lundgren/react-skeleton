const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
    	'webpack-hot-middleware/client',
		'./src/index.js'
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	devtool: 'cheap-module-eval-source-map',

	module: {
		loaders: [
		{
			test: /\.js$/,
			include: './src',
        	exclude: /node_modules/,
			loaders: ['babel', 'react-hot']
		}]
	},

	plugins: [  
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	
}