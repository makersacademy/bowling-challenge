'use strict';

  function Game (){
    this.frames = [new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame(),
                  new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame(3)];
  }

  Game.prototype.getFrames = function(){
    return this.frames;
  };

  Game.prototype.getTotalScore = function(){
    var totalScore = 0;
    var bonus = 0;

    for (var i = 0; i < 10; i++){
      //console.log(i);
      var thisFrame = this.frames[i];
      var nextFrame = this.frames[i+1] || thisFrame;

      if(thisFrame.isDone()){
        var frameScore = this.frames[i].calculateFrameScore();
        totalScore += frameScore;
        if (thisFrame.hasStrike()){
          bonus = (nextFrame === thisFrame? thisFrame.getRolls()[2].getPinsKnocked() : nextFrame.calculateFrameScore());
          totalScore += bonus;
          //console.log(bonus);
        }

        if (thisFrame.isSpare() && !(thisFrame.hasStrike())){
          bonus = (nextFrame === thisFrame ? thisFrame.getRolls()[2].getPinsKnocked() : nextFrame.getRolls()[0].getPinsKnocked());
          totalScore += bonus;
          //console.log(bonus);
        }

      }// end if
      //console.log(totalScore);
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
