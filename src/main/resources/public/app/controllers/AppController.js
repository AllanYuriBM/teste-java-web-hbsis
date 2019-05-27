var app = angular.module('app', ['ngRoute']).controller('AppController', function($scope, $http, $window) {

    $scope.cidades = {};
    $scope.cidades_cadastradas = {};
    $scope.previsaoApi = {};
    $scope.alert = {};


    var baseUrl = '/cidade'
    var buscaApiUrl= '/forecast'

    $window.onload = function() {
        $scope.pesquisar();
    }

    $scope.cadastrar = function(pais, cidade) {
        $http({
            method: 'POST',
            url: baseUrl + '/' + pais + '/' + cidade
        }).then(function success(response) {
            $scope.cidades = response;
            $scope.pesquisar();
        }, function error(err) {
            console.log(err);
        });
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

    $scope.validaApiCadastro = function(pais, cidade) {
        var cidadeForApi = cidade + ',' + pais;
        $http({
            method: 'GET',
            url: buscaApiUrl + '/' + cidadeForApi 
        }).then(function success() {
            $scope.cadastrar(pais, cidade);
        },function error(err) {
            console.log(err);
           
        });
    }

    $scope.buscaApiUrl = function(pais, cidade) {
        var cidadeForApi = cidade + ',' + pais;
        window.location.href = "#!/previsao/" + cidadeForApi; 
    }

});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "view/cadastro.html",
      controller : "AppController"
    })
    .when("/previsao/:cidadeForApi", {
      templateUrl : "view/detalhesPrevisao.html",
      controller : "previsaoController"
    })
    .otherwise({redirectTo:'/'});
    
});

app.controller("previsaoController", function ($scope, $routeParams, $http, $window) {
    var cidadeForApi = $routeParams.cidadeForApi
    var buscaApiUrl= '/forecast'

    $window.onload = function() {
        $scope.buscaApi(cidadeForApi);
    }

    $scope.buscaApi = function(cidadeForApi) {
        $http({
            method: 'GET',
            url: buscaApiUrl + '/' + cidadeForApi
        }).then(function success(response) {
            $scope.previsaoApi = response.data.list;
        },function error(err) {
            console.log(err);
        });
    }

    $scope.buscaApi(cidadeForApi);

});
