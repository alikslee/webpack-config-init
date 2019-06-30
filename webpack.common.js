const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode)

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {test:/\.css$/, use:[devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']},
            {test:/\.(jpg|png|jpeg|gif|svg)$/, use:['url-loader?limit=2048']},
            {test:/\.js$/, exclude: /(node_modules|bower_components)/,use:['babel-loader']},
            {test:/\.less$/, use:[devMode ? 'style-loader' : MiniCssExtractPlugin.loader,  'css-loader', 'less-loader']},
            {test:/\.scss$/, use:[devMode ? 'style-loader' : MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader']},
            {test:/\.(woff|woff2|eot|ttf|otf)$/, use:['file-loader']}

        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
        })
    ]
}

