var app = angular.module('Previsao', []).controller('PrevisaoController', function($scope, $http, $window) {
    $scope.cidades = {};
    $scope.cidades_cadastradas = {};
    $scope.previsaoApi = {};

    var baseUrl = '/cidade'
    var buscaApiUrl= '/forecast'

    $window.onload = function() {
        $scope.pesquisar();
    }

    $scope.pesquisar = function() {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function success(response) {
            $scope.cidades_cadastradas = response.data;
        }, function error(err) {
            console.log(err);
        });
    }

    $scope.cadastrar = function(pais, cidade) {
        if($scope.validaApiCadastro(pais, cidade));
        $http({
            method: 'POST',
            url: baseUrl + '/' + pais + '/' + cidade
        }).then(function success(response){
            $scope.cidades = response;
            $scope.pesquisar();
        }, function error(err) {
            console.log(err);
        });
    }

    $scope.validaApiCadastro = function(pais, cidade) {
        var cidadeForApi = cidade + ',' + pais;
        $http({
            method: 'GET',
            url: buscaApiUrl + '/' + cidadeForApi 
        }).then(function success(response){
        },function error(err) {
            console.log(err);
        });
    }

    $scope.buscaApi = function(pais, cidade) {
        var cidadeForApi = cidade + ',' + pais;
        $http({
            method: 'GET',
            url: buscaApiUrl + '/' + cidadeForApi 
        }).then(function success(response){
            $scope.previsaoApi = response.data.list;
            console.log("##############################################" + response);
            location.href = "detalhesPrevisao.html";
        },function error(err) {
            console.log(err);
        });
    }

});