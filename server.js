var path=require('path');
var webpack=require('webpack');
var webpackDevServer=require('webpack-dev-server');
var config=require('./webpack.config');

var proxy=[
{
	path:'/*/*',
    target:'http://172.20.109.184',
    host:'172.20.109.184',
    secure:false
}];
	console.log("publicPath is "+config.output.publicPath);
var server=new webpackDevServer(webpack(config),{

    publicPath:config.output.publicPath,
	stats:{
		colors:true
	},
	proxy
});

server.app.get('*',function(req,res){
     res.sendFile(__dirname+"/dist/Index.html");
});
server.listen(8008,function(){
	console.log("----------------start-----------------");
	console.log("-----open port 8008 successfully------");
	console.log("-----------------end------------------");
})