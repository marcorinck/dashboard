define(['angular', 'config/config', 'angular-route', 'navbar/navbar', 'dashboard/dashboard', 'templates'],
	function (angular, config) {
	"use strict";

    var app = angular.module("app", config.standardAngularModules);

	app.config(['$httpProvider', '$routeProvider', '$translateProvider', function ($httpProvider, $routeProvider, $translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: 'translations/',
			suffix: '.json'
		});
		$translateProvider.determinePreferredLanguage();
		$translateProvider.useMissingTranslationHandlerLog();

		$routeProvider.otherwise({redirectTo: '/'});
	}]);

	return app;
});
