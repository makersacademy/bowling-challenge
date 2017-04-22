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
  return this.frames;
};

Game.prototype.playFrame = function(frame){
  var firstFrameResult = this.frames[frame].firstBowl();
  if (firstFrameResult !== 'Strike!') {
    this.frames[frame].secondBowl();
  }
};

Game.prototype.totalGameScore = function(){
  var totalScore = 0;
  var second = this.frames[this.frames.length-1].extraBowl();
  this.frames.forEach(function(frame, index, array){
    var nextArray = array[index+1];
    var nextNextArray = array[index+2];
    var strike = frame.status === 'Strike!';
    if (nextArray){
      var twoStrikes = strike && nextArray.status === 'Strike!';
      if (frame.status === 'Spare!'){
        totalScore += 10 + (10 - nextArray.firstBowlRemainder);
      } else if (twoStrikes && nextNextArray){
        totalScore += 20 + (10 - nextNextArray.firstBowlRemainder);
      } else if (twoStrikes && nextNextArray === undefined){
        totalScore += 20 + second;
      // } else if (twoStrikes){
      //   totalScore += 20 + (10 - array[+1].firstBowlRemainder);
      } else if (strike){
        totalScore += 10 + (nextArray.frameScore());
      } else {
        totalScore += frame.frameScore();
      }
    } else if (strike){
      totalScore += frame.frameScore() + second + frame.extraBowl();
    } else {
      totalScore += frame.frameScore();
    }
  });
  return totalScore;
};
