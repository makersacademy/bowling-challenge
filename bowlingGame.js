var app = angular.module('bowlingGame',[]);

app.controller('bowling', function($scope){
  bowling = new Bowling()
  frame = new Frame()
  $scope.cones = bowling.remainingCones
  $scope.frame = frame.gameFrames
  $scope.bowl = function(){
    bowling.throwBowl($scope.frame.frame1)
    $scope.cones = bowling.remainingCones
  };
});
