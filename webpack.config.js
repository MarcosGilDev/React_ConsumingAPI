module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js',
	},
	devtool: '#eval-source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './',
	},
};
