/// <reference path="jquery.d.ts" />
/// <reference path="angular.d.ts" />
/// <reference path="weapon.ts" />

angular.module( 'ZWSim', [] )
	.controller( 'ZWSimController', [ '$scope', '$http', ( $scope, $http )=>{
		var $uri = "parameters.json";

		$scope.weapon = new ZWSim.Weapon();
		$scope.weapon_type = "dps";

		$scope.type_changed = function(){
			$scope.weapon.set( $scope.param[ $scope.weapon_type ] );
		};

		$http({
			method: 'GET',
			url: $uri
		}).success( function( data, status, header, config ){

			$scope.param = data;
			$scope.type_changed();
		});

	}]);

