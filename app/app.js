'use strict';

var bloggApp = angular.module('bloggApp', [
  'ngRoute',
  'ngResource'
]);

bloggApp.config(['$routeProvider', function($routeProvider) {
  
	$routeProvider
		.when('/blogg', {
	    templateUrl: 'blogg/blogg.html',
	    controller: 'BloggCtrl'
	  })
  	.otherwise({redirectTo: '/blogg'});

}]);
