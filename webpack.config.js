var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var APP_FILE=path.resolve(APP_PATH,'app.jsx');
var BUILD_PATH=path.resolve(ROOT_PATH,'dist');

module.exports={
   devtool:'inline-source-map',
   entry:{
     app:APP_FILE
   },
   output:{
       publicPath:BUILD_PATH,
       path:BUILD_PATH,
       filename:'[name].js',
   },
   module:{
        loaders:[
           {
               test:/\.js$/,
               exclude:/^node_modules$/,
               loader:'babel-loader',
                include:[APP_PATH]
           },
           {
               test:/\.jsx$/,
               exclude:/^node_modules$/,
               loader:'babel-loader',
               include:[APP_PATH]
           },{
               test:/\.css$/,
               exclude:/^node_modules$/,
               loader:'css-loader',
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                include:[APP_PATH]
            },{
               test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
               exclude: /^node_modules$/,
               loader: 'file-loader?name=[name].[ext]',
            }
        ]

   },
   plugins:[
         new HtmlWebpackPlugin({
               filename:path.resolve(BUILD_PATH,'Index.html'),
               template:path.resolve(APP_PATH,'index.html'),
               hash:false
            }),
         new ExtractTextPlugin('[name].css')
   ],
   resolve:{
      extensions:['.js','.jsx','.css','.less','.scss']
   }
}
