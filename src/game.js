// Looks after the scoring for entire game
'use strict';

var Game = function(){
  this.frames = [new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame];
};

Game.prototype.startGame = function(){
  var self = this;
  this.frames.forEach(function(frame, index, array) {
    self.playFrame(index);
  });
  return this.frames
};

Game.prototype.playFrame = function(frame){
  this.frames[frame].firstBowl();
  if (this.pinsDown < 10) {
  this.frames[frame].secondBowl();
}
};

Game.prototype.totalGameScore = function(){
  var totalScore = 0;
  this.frames.forEach(function(frame, index, array){
    totalScore += frame.frameScore()
  });
  return totalScore
};
