'use strict';

  function Game (){
    this.frames = [new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame(),
                  new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame()];
  }

  Game.prototype.getFrames = function(){
    return this.frames;
  };

  Game.prototype.getTotalScore = function(){
    var totalScore = 0;
    var bonus = 0;

    for (var i = 0; i < 10; i++){
      console.log(this.frames[i])

      if(this.frames[i].isDone()){
        var frameScore = this.frames[i].calculateFrameScore();
        totalScore += frameScore

        if (this.frames[i].hasStrike()){
          bonus = this.frames[i+1].calculateFrameScore();
          totalScore += bonus;
        }

        if (this.frames[i].isSpare() && !(this.frames[i].hasStrike())){
          bonus = this.frames[i+1].getRolls()[0].getPinsKnocked();
          totalScore += bonus;
        }

        console.log(totalScore);
      }// end if

    } //end for
    return totalScore;
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
