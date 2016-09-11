//service
bloggApp.service('BloggService', ['$resource', function($resource){
	var url = 'http://localhost:3002';
	//var url = 'https://todo-be.herokuapp.com';
	return $resource(url+'/blogg/:id', { id : '@id'}, {
		get:{
			method: 'GET',
			isArray: true
		},
		post:{
			method: 'POST'
		},
		delete:{
			method: 'DELETE'
		},
		update: {
			method: 'PUT'
		}
	});
}]);



