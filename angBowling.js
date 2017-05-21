var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    var game = new Bowling;

    var pins = function(){
      array = []
      for ( i = 1; i <= 10; i++) {
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


    $scope.pins = pins();
    $scope.numberOfRolls = frameStructure();
    $scope.rolls = game.rolls;
    $scope.roll = function(n) {
      if ( game.rolls.length < 21 && game.rolls.length % 2 != 0 && game.rolls[game.rolls.length - 1] + n > 10 ) { window.alert("The score of a frame can't be more than 10") }
      if ( game.rolls.length >= 22 ) { window.alert("The game finished") }
      if ( game.rolls[18] != 10 && game.rolls.length >= 20 ) { window.alert("The game finished") }
      else { game.roll(n) };
    };
    $scope.score = game.score;

});
