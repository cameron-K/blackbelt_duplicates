module.exports=(function(){
	var mongoose=require('mongoose');
	var Score=mongoose.model('Score');
	return {
			add:function(req,res){
				var new_score=new Score({
					user:req.body.user,
					correct:req.body.correct,
					total:req.body.total
				}).save(function(err){
					if(err){
						console.log(err);
					}
					else{
						console.log("success-add score");
					}
				});
			},
			show:function(req,res){
				Score.find({},function(err,results){
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