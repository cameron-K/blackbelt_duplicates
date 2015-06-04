var blackbelt=angular.module('blackbelt',['ngRoute']);
    	blackbelt.config(function($routeProvider){
    		$routeProvider
    		.when('/',{
    			templateUrl:'partials/home.html'
    		})
    		.when('/add',{
    			templateUrl:'partials/add.html'
    		})
            .when('/lets_play',{
                templateUrl:'partials/lets_play.html'
            })
    		.otherwise({
    			redirectTo:'/'
    		})
    	})

        var user_name;
        var message;