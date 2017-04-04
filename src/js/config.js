angular.module('app.config', ['ui.router'])
.config(function ($scope) {

	$urlRouterProvider.otherwise('/page-not-found');

	$stateProvider
		.state('/', {
	        url: '/',
	        templateUrl: 'template/chart.html',
	        controller: 'chartController'
	    })
	    .state('/page-not-found', {
	        url: '/page-not-found',
	        templateUrl: 'template/page-not-found.html'
	    });
});
