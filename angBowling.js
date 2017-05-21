var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    var game = new Bowling;

    $scope.rolls = game.rolls;
    $scope.roll = game.roll;
    $scope.score = game.score;
});
