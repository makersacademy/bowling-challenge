var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    var game = new Bowling;

    var arrayCreator = function(s, e, j = 1){
      array = []
      for ( i = s; i <= e; i += j) {
        array.push(i);
      }
      return array
    };

    var frameStructure = function(){
      array = []
      rollIndex = 0;

          for ( i = 1; i <= 10; i++) {
          array.push([i,rollIndex, rollIndex + 1])
          rollIndex += 2;
        }
        return array
      };

    $scope.pins = arrayCreator(1, 10);
    $scope.numberOfRolls = frameStructure();
    $scope.rolls = game.rolls;
    $scope.roll = game.roll;
    $scope.score = game.score;
});
