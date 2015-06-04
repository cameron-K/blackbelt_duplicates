var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var scoreSchema=new mongoose.Schema({
	user:String,
	correct:Number,
	total:Number
})

mongoose.model('Score',scoreSchema);