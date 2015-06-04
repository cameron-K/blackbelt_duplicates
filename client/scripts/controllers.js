blackbelt.controller('homeController',function($scope,scoresFactory){
            $scope.scores=[];
            $scope.message=message;
            message='';

            scoresFactory.getScores(function(scores){
                $scope.scores=scores;  
            })
            while(!user_name){
              user_name=prompt('Enter your name');
            }

        })

        blackbelt.controller('addController',function($scope,$location,questionsFactory){
            $scope.errors=[];
            
            $scope.addQuestion=function(){
                console.log($scope.newQuestion);

                $scope.errors=[];
                if(!$scope.newQuestion){
                    $scope.errors.push('The question must be at least 15 characters');
                    $scope.errors.push('Please provide all correct and incorrect answers');
                }
                else{
                    if($scope.newQuestion.question.length<15){
                        $scope.errors.push('The question must be at least 15 characters');
                    }
                    if(!$scope.newQuestion.answer||!$scope.newQuestion.false_one||!$scope.newQuestion.false_two){
                        $scope.errors.push('Please provide all correct and incorrect answers');
                    } 
                }
                console.log($scope.errors);
                if($scope.errors.length===0){
                    questionsFactory.addQuestion($scope.newQuestion);
                    $scope.newQuestion={};
                    message='question added';
                    $location.path('/');
                }
                
            }
        })



        blackbelt.controller('playController',function($scope,$location,questionsFactory,scoresFactory){
            $scope.user_name=user_name;
            $scope.answers={};
            $scope.questions=[];

            questionsFactory.getQuestions(function(questions){
                $scope.questions=questions;
                for(var i=0;i<$scope.questions.length;i++){
                $scope.questions[i].model=i;
            }
            for(var i=0;i<$scope.questions.length;i++){
                $scope.questions[i].choices=[];

                $scope.questions[i].choices.push($scope.questions[i].answer);
                $scope.questions[i].choices.push($scope.questions[i].false_one);
                $scope.questions[i].choices.push($scope.questions[i].false_two);

                for(var j=0;j<3;j++){
                    var rand=Math.floor(Math.random()*3);
                    var temp=$scope.questions[i].choices[j];
                    $scope.questions[i].choices[j]=$scope.questions[i].choices[rand];
                    $scope.questions[i].choices[rand]=temp;

                }
            }
            })

            $scope.submitAnswers=function(){


                var correct_answers=0;
                var total=$scope.questions.length;
                $scope.error='';
                for(var i=0;i<$scope.questions.length;i++){
                    if($scope.questions[i].model===$scope.questions[i].answer){
                        correct_answers++;
                    }
                    if(!$scope.questions[i].model){
                        $scope.error='Answer all questions';
                    }
                }
                if($scope.error!=='Answer all questions'){
                    scoresFactory.addScore(correct_answers,total);
                    message='Thanks for playing '+user_name+' Your score is '+correct_answers+'/'+total+' ('+(correct_answers/total)*100+'%)';
                    $location.path('/');
                }
            }
        })