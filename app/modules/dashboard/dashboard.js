define(['angular', 'dashboard/DashboardController'], function (angular, DashboardController) {
	"use strict";

	var dashboard = angular.module("dashboard", ['ngRoute']);

	dashboard.config(["$routeProvider", function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'modules/dashboard/dashboard.html',
			controller: DashboardController
		});

	}]);

	return dashboard;
});