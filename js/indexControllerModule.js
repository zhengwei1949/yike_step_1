;(function(angular){
    var indexControllerModule = angular.module('indexControllerModule',[]);
    indexControllerModule.controller('indexController',function($scope){
        $scope.$parent.active = '/';
    });
})(angular);