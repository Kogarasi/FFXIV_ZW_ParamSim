/// <reference path="jquery.d.ts" />
/// <reference path="angular.d.ts" />
/// <reference path="weapon.ts" />

angular.module( 'ZWSim', [] )
	.controller( 'ZWSimController', [ '$scope', '$http', ( $scope, $http )=>{
		var $uri = "parameters.json";

		$scope.novus = new ZWSim.Weapon();
		$scope.nexus = new ZWSim.Weapon();
		$scope.zw = new ZWSim.Weapon();

		$scope.novus.link_to( $scope.nexus );
		$scope.nexus.link_to( $scope.zw );

		$http({
			method: 'GET',
			url: $uri
		}).success( function( data, status, header, config ){
			$scope.novus.set( data.novus );
			$scope.nexus.set( data.nexus );
			$scope.zw.set( data.zw );
		});

	}]);

