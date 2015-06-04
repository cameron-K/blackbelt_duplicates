blackbelt.factory('scoresFactory',function($http){
          var factory={};

          factory.getScores=function(callback){
            $http.get('/scores').success(function(output){
                callback(output);
            })
          }

          factory.addScore=function(correct_answers,total){
            console.log(user_name);
            var score_info={
                correct:correct_answers,
                total:total,
                user:user_name
            };

            $http.post('/scores',score_info);
          }

          return factory;
        })

        blackbelt.factory('questionsFactory',function($http){
          var questions=[];
          var factory={};

          factory.getQuestions=function(callback){
            $http.get('/questions').success(function(output){
              questions=output;
              callback(questions);
            })
          }

          factory.addQuestion=function(question){
            $http.post('/question',question);
          }

          return factory;
        })