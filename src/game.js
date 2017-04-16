// Looks after the scoring for entire game
'use strict';

var Game = function(){
  this.frames = [new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame];
};

Game.prototype.startGame = function(){
  this.frames.forEach(function(frame, index, array) {
    frame.firstBowl();
    frame.secondBowl();
  })
  return this.frames
};
