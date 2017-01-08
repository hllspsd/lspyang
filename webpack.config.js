var path = require('path');

module.exports = {
	entry: './index',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		colors: true, //终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		inline: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
}