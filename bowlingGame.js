var app = angular.module('bowlingGame',[]);

app.controller('bowling', function($scope){
  bowling = new Bowling()
  frame = new Frame()

  $scope.cones = bowling.remainingCones

  $scope.allframes = frame.gameFrames

  $scope.coneReset = 1
  $scope.bowl = function(){
    frame.frameSet(frame.frameNumber)
    bowling.throwBowl(frame.currentFrame)
    if(frame.statusChecker() == true) {
      bowling.remainingCones = 10
    };
    frame.frameSet(frame.frameNumber)
    $scope.cones = bowling.remainingCones
  };
});
