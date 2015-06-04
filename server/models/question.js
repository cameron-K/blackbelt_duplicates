var mongoose=require('mongoose');

var questionSchema=new mongoose.Schema({
	question:String,
	answer:String,
	false_one:String,
	false_two:String
})

mongoose.model('Question',questionSchema);