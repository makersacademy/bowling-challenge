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
  this.frames.forEach(function(frame, index, array){
    var nextArray = array[index+1];
    if (nextArray){
      if (frame.status === 'Spare!'){
        totalScore += 10 + (10 - nextArray.firstBowlRemainder);
      } else if (frame.status === 'Strike!' && nextArray.status === 'Strike!' && array[index+2]){
        totalScore += 20 + (10 - array[index+2].firstBowlRemainder);


      } else if (frame.status === 'Strike!' && nextArray.status === 'Strike!'){
        if (index === 8) { console.log('here 3') }

        totalScore += 20 + (10 - array[+1].firstBowlRemainder);




      } else if (frame.status === 'Strike!'){
        totalScore += 10 + (nextArray.frameScore());
      } else {
        totalScore += frame.frameScore();
      }
    } else if (frame.status === "Strike!"){
      totalScore += frame.frameScore() + frame.extraBowl() + frame.extraBowl();
    } else {
      totalScore += frame.frameScore();
    }
    console.log('------');
    console.log('FRAME: ', (index + 1), totalScore);
  });
  return totalScore;
};
