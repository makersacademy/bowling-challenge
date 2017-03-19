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
      console.log(i);
      console.log(this.frames[i]);
      var thisFrame = this.frames[i];
      var nextFrame = this.frames[i+1] || thisFrame;
      var nextToNextFrame = this.frames[i+2] || nextFrame;

      if(thisFrame.isDone()) {
        var frameScore = this.frames[i].calculateFrameScore();
        totalScore += frameScore;

        if (thisFrame.hasStrike()) {
          bonus = this._getStrikeBonus(nextFrame, nextToNextFrame);
          /*
          if (nextFrame.hasStrike()) {
            if(nextToNextFrame.hasStrike()) {
              bonus = 20;
            } else {
              bonus = nextFrame.calculateFrameScore() +
                      nextToNextFrame.getRolls()[0];
            }
          } else {
            bonus = (nextFrame === thisFrame) ?
                    thisFrame.getRolls()[2].getPinsKnocked() :
                    nextFrame.calculateFrameScore();
          }
          */
          totalScore += bonus;
          console.log(bonus);
        }

        if (thisFrame.isSpare() && !(thisFrame.hasStrike())) {
          bonus = (nextFrame === thisFrame) ?
                    thisFrame.getRolls()[2].getPinsKnocked() :
                    nextFrame.getRolls()[0].getPinsKnocked();
          totalScore += bonus;
          //console.log(bonus);
        }
      }// end if done
      console.log(totalScore);
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
