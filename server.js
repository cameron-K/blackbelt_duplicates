var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
require('./config/mongoose.js');

var app=express();
app.use(bodyParser.json());
require('./config/routes.js')(app);

//require routes and mongoose config file

app.use(express.static(path.join(__dirname,'./client')));
app.listen(8000,function(){
	console.log('running : 8000');
})