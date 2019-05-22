var app = angular.module('Previsao', []).controller('PrevisaoController', function($scope, $http, $window) {
    $scope.cidades = {};
    $scope.cidades_cadastradas = {};

    var baseUrl = '/cidade'

    $window.onload = function(){
        $scope.pesquisar();
    }

    $scope.pesquisar = function(){
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function success(response){
            $scope.cidades_cadastradas = response.data;
        }, function error(err) {
            console.log(err);
        });
    }

    $scope.cadastrar = function(pais, cidade){
        $http({
            method: 'POST',
            url: baseUrl + '/' + pais + '/' + cidade
        }).then(function success(response){
            $scope.cidades = response;
        }, function error(err) {
            console.log(err);
        });
    }

});