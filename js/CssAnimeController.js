var cssAnimeApp = angular.module('CssAnimeApp');

cssAnimeApp.controller('CssAnimeController', ['$scope', function($scope){
  
  // model data
  $scope.newWinner = {name: ''};
  $scope.winners = [
    {name: 'Colin Firth'},
    {name: 'Jean Dujardin'},
    {name: 'Daniel Day Lewis'},
    {name: 'Matthew McConaughey'},
    {name: 'Eddie Redmayne'},
    {name: 'Leonardo DiCaprio'}
  ];

  // ng-class values
  $scope.styles = {
    'bold': false,
    'italics': false
  };
  $scope.validation = {
    'error': false,
    'success': false
  };
  $scope.winnerButton = 'btn-default';

  $scope.validateForm = function () {
    if ($scope.newWinner.name.length === 0) {
      $scope.validation.error = false;
      $scope.validation.success = false;
      $scope.winnerButton = 'btn-default';
    }
    else if ($scope.newWinner.name.length < 4){
      $scope.validation.error = true;
      $scope.validation.success = false;
      $scope.winnerButton = 'btn-default';
    } else {
      $scope.validation.error = false;
      $scope.validation.success = true;
      $scope.winnerButton = 'btn-success';
    }
  };

  $scope.changeStyle = function(style) {
    $scope.styles[style] = !$scope.styles[style]
  };

  $scope.addWinner = function() {
    $scope.winners.push({ name: $scope.newWinner.name });
    $scope.newWinner.name = '';
    $scope.validateForm();
  };
}]);