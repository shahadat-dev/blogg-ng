'use strict';

bloggApp.controller('BloggCtrl', ['$scope','BloggFactory',
	function($scope, BloggFactory) {
	
	console.log("Hello blogg");

	// ADD a blogg
	$scope.addBlogg = function(blogg){
		if(typeof blogg == 'undefined'){
			console.log("Please fill the form correctly");
			return;
		}
		console.log(blogg);
		if(typeof blogg._id === 'undefined'){
			// add new blogg
			BloggFactory.add(blogg, function(status, data){
				if(!status){
					console.log("Something went wrong. Can not add");
					return;
				}
				angular.copy({}, $scope.blogg);
				get();
				
			});
		} else{
			// update existing blogg
			var newBlogg = {};
			newBlogg['name'] = blogg.name;
			newBlogg['description'] = blogg.description;
			var updateId = blogg._id;

			BloggFactory.update({id: updateId}, newBlogg, function(status, data){
				if(!status){
					console.log("Something went wrong. Can not update");
					return;
				}
				angular.copy({}, $scope.blogg);
				get();
			});

		}

		
	}	

	// VIEW detail of a blogg
	$scope.view = function(blogg){
		$scope.viewDetail = true;
		$scope.bloggDetail = blogg;
	}

	//DELETE a blogg
	$scope.delete = function(blogg){
		BloggFactory.delete(blogg._id, function(status, res){
			if(!status){
				console.log("Something went wrong. Can not delete");
			}
			console.log(res);
			get();
		})
	}

	// get blogg for edit
	$scope.getBloggForUpdate = function(blogg){
		$scope.showAddBox = true;
		$scope.blogg = blogg;
	}

	// GET all bloggs
	var get = function(){
		BloggFactory.getAll(function(data){
			console.log(data);
			$scope.bloggs = data;
		});		
	}

	get();
}]);