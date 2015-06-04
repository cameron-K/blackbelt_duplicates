module.exports=(function(){
	var mongoose=require('mongoose');
	var Question=mongoose.model('Question');
	return {
		add:function(req,res){
			var new_question=new Question({
				question:req.body.question,
				answer:req.body.answer,
				false_one:req.body.false_one,
				false_two:req.body.false_two
			}).save(function(err){
					if(err){
						console.log(err);
					}
					else{
						console.log("success-add question");
					}
				});
			},
			show:function(req,res){
				Question.find({},function(err,results){
					if(err){
						console.log(err);
					}
					else{
						res.json(results);
					}
				})
			}
		// show:function(req,res){
		// 	Customer.find({},function(err,results){
		// 		if(err){
		// 			console.log(err);
		// 		}
		// 		else{
		// 			res.json(results);
		// 		}
		// 	})
		// },


		
		// add:function(req,res){
		// 	var new_customer=new Customer({


		// 		name:req.body.name,
		// 		date:new Date()


		// 	}).save(function(err){
		// 		if(err){
		// 			console.log(err);
		// 		}
		// 		else{
		// 			console.log("success-add customer");
		// 		}
		// 	});
		// },


		// remove:function(req,res){
		// 	Customer.remove({_id:req.body._id},function(err){
		// 		if(err){
		// 			console.log(err);
		// 		}
		// 		else{
		// 			console.log("success-remove");
		// 		}
		// 	});
		// }
	}
})();