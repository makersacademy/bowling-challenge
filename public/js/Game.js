(function(exports){

'use strict';

  function Game (){
    this.frames = [new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame(),
                  new Frame(), new Frame(), new Frame(),
                  new Frame(), new LastFrame()];
  }

  Game.prototype.isOver = function () {
    return this.getFrames().every(frame => frame.isDone() === true);
  };
  Game.prototype.getFrames = function(){
    return this.frames;
  };

  Game.prototype.getTotalScore = function(){
    var totalScore = 0;
    var bonus = 0;

    for (var i = 0; i < 10; i++){
      console.log(`index:${i}`);
      console.log(this.getFrames()[i]);
      var thisFrame = this.getFrames()[i];
      var nextFrame = this.getFrames()[i+1] || thisFrame;
      var nextToNextFrame = this.getFrames()[i+2] || nextFrame;

      if(thisFrame.isDone()) {
        var frameScore = thisFrame.calculateFrameScore();
        totalScore += frameScore;
        bonus = this._calculateBonus(thisFrame, nextFrame, nextToNextFrame)
        totalScore += bonus
      }// end if done
       console.log(`totalScore: ${totalScore}`);
    } //end for
    return totalScore;
  };

  Game.prototype.play = function(knockedPins){
    this._currentFrame().play(knockedPins)
      // delegated the knockedPins to currentFrame -> currentRoll.knockedPins
  };

  Game.prototype._currentFrame = function() {
    var currentFrame = this.getFrames().find(function(frame){
      return frame.isDone() === false;
    });
    return currentFrame;
  };

  Game.prototype._getStrikeBonus = function(frame1, frame2) {
    var rollsFromFrame1 = (frame1.getRolls().filter(
                                        function(roll) {
                                          return  (roll.isSet() === true);
                                        }));
    if (rollsFromFrame1.length === 1) {
      var rollsFromFrame2 = (frame2.getRolls().filter(
                                          function(roll) {
                                            return  (roll.isSet() === true);
                                          }));
      return rollsFromFrame1[0].getPinsKnocked() +
              rollsFromFrame2[0].getPinsKnocked();

    } else if (rollsFromFrame1.length === 2) {
      return frame1.calculateFrameScore();
    } else if (rollsFromFrame1.length === 3) {

      if (frame1 === frame2) {
        return rollsFromFrame1[0].getPinsKnocked() +
               rollsFromFrame1[1].getPinsKnocked();
      }
      return rollsFromFrame1[1].getPinsKnocked() +
             rollsFromFrame1[2].getPinsKnocked();
    }
  };

  Game.prototype._getSpareBonue = function (thisFrame, nextFrame) {
    return (nextFrame === thisFrame) ?
              thisFrame.getRolls()[2].getPinsKnocked() :
              nextFrame.getRolls()[0].getPinsKnocked();
  };

Game.prototype._calculateBonus = function (thisFrame, nextFrame, nextToNextFrame) {
  var bonus = 0;

  if (thisFrame.hasStrike()) {
    bonus += this._getStrikeBonus(nextFrame, nextToNextFrame) || 'strike'
    console.log(`strike : ${bonus}`);
  }

  if (thisFrame.isSpare()) {
    bonus += this._getSpareBonue(thisFrame, nextFrame) || 'spare'
    console.log(`spare: ${bonus}`);
  }

  return bonus;
};

  exports.Game = Game;
  })(this);
