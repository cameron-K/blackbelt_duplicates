module.exports=function(app){
	var questions=require('../server/controllers/questions.js');
	var scores=require('../server/controllers/scores.js');

	app.get('/questions',function(req,res){
		questions.show(req,res);
	})
	app.post('/question',function(req,res){
		questions.add(req,res);
	})


	app.post('/scores',function(req,res){
		scores.add(req,res);
	})
	app.get('/scores',function(req,res){
		scores.show(req,res);
	})

}