'use strict';

  function Game (){
    this.frames = [new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame(),
                  new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame()];
    this.totalScore = 0;
  }

  Game.prototype.getFrames = function(){
    return this.frames;
  };

  Game.prototype.getTotalScore = function(){
    var frameScores = this.getFrames().map(function(frame){
      return frame.calculateFrameScore();
    });
    this.totalScore = frameScores.reduce(function(acc, val){ return acc + val},0);
    return this.totalScore;
  };

  Game.prototype.play = function(knockedPins){
    this._currentFrame().play(knockedPins)
      // delegated the knockedPins to currentFrame -> currentRoll.knockedPins
  };

 Game.prototype._currentFrame = function(){
   var currentFrame = this.getFrames().find(function(frame){
     return frame.isDone() === false;
   });
   return currentFrame;
 };

 // Game.prototype.calculateTotalScore = function (){
 //
 // };
