var app = angular.module('bowlingGame',[]);

app.controller('bowling', function($scope){
  bowling = new Bowling()
  frame = new Frame()

  $scope.cones = bowling.remainingCones

  $scope.allframes = frame.gameFrames

  $scope.frameNow = frame.currentFrame

  $scope.frameNumber = frame.frameNumber

  $scope.bowl = function(){
    frame.frameSet(frame.frameNumber)
    bowling.throwBowl(frame.currentFrame)
    frame.statusChecker()
    frame.frameSet($scope.frameNumber)
    $scope.cones = bowling.remainingCones
  };

});
