//factory
bloggApp.factory('BloggFactory', ['BloggService', function(BloggService){
	
	return {
		
		getAll : function (callback){
			BloggService
				.get({})
				.$promise
				.then(function(data){
					callback(data);
				},function(err){
						callback(err);
				});
			},
		add : function(todo,callback){
			BloggService
				.post(todo)
				.$promise
				.then(function(data){
					callback(true, data);
				}, function(err){
					callback(false, err);
				});
		},
		delete : function(id2, callback){
			BloggService
				.delete({id:id2})
				.$promise
				.then(function(res){
					callback(true, res);
				}, function(err){
					callback(false, err);
				});
		},
		update : function(id, todo, callback){
			BloggService
				.update(id, todo)
				.$promise
				.then(function(res){
					callback(true, res);
				}, function(err){
					callback(false, err);
				});
		}

}

}]);