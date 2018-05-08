# React_ConsumingAPI

Steps should be followed to create this project:


1- Create new package.json using npm init.


    1- You need a description and a repository field


2- Install npm using "npm i --save"


3- Create a web pack using "npm install webpack --save-dev"


4- Create a new file with the name "webpack.config.js"


5- Add the following line in you package.json:


        "scripts": {
            "start": "webpack"
        },
6- Install babel using "npm i babel-core babel-preset-es2015 babel-preset-react --only:dev"


7- Create a file with the name ".babelrc"


8- Add a babel loader using "npm i babel-loader --only:dev"


9- webpack.config has to look like the following lines:
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { 
                    test: /\.jsx?$/, 
                    loader: 'babel-loader', 
                    exclude: /node_modules/ 
                }
            ]
        }
    };
10- Add webpack development server using "npm i webpack-dev-server --only:dev" and "npm i webpack-cli"


11- Change the initial scrip in package.json: 
    "scripts": {
        "start": "webpack-dev-server"
    },
12-Change the file webpack.config.js
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { 
                    test: /\.jsx?$/, 
                    loader: 'babel-loader', 
                    exclude: /node_modules/ 
                }
            ]
        },
        devServer: {
            contentBase: path.resolve(__dirname, "dist")
        }
    };
13- Install css loader using "npm i css-loader style-loader --only:dev"


14- Final webpack.config.js
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: __dirname,
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { 
                    test: /\.jsx?$/, 
                    loader: 'babel-loader', 
                    exclude: /node_modules/ 
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            contentBase: './'
        }
    };
14- Install react using "npm i react react-dom"


15- Install "npm i babel-preset-react"s


16- Install "npm install --save react-redux"


17- Install "npm install --save redux"


18- Final .babelrc:
    {
        "presets": ["es2015", "react"]
    }
