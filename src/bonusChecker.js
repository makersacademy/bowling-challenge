'use strict';

function BonusChecker() {};

BonusChecker.prototype = {

  checkBonus: function(frames) {
    var lastFrame = frames[frames.length-1];
    var oneFromLastFrame = frames[frames.length-2];
    var twoFromLastFrame = frames[frames.length-3];

    if (afterFrame(2)) {

      if (oneFromLastFrame.isStrike() && twoFromLastFrame.isStrike()) {
        doubleStrikeBonus();
      } else if (currentFrameCompletePreviousFrameStrike() ) {
        singleStrikeBonus()
      } else if (oneFromLastFrame.isSpare()) {
        spareBonus();
      }

    } else if (afterFrame(1)) {

      if (currentFrameCompletePreviousFrameStrike()) {
        singleStrikeBonus()
      } else if (oneFromLastFrame.isSpare()) {
        spareBonus();
      }
    }; 


    function currentFrameCompletePreviousFrameStrike() {
      return lastFrame.isComplete() && !lastFrame.isStrike() && oneFromLastFrame.isStrike()
    };

    function spareBonus() {
      oneFromLastFrame.addBonus(lastFrame.firstRoll);
    };

    function singleStrikeBonus() {
      oneFromLastFrame.addBonus(lastFrame.getScore());
    };

    function doubleStrikeBonus() {
      twoFromLastFrame.addBonus(oneFromLastFrame.getScore() + lastFrame.firstRoll);
    };

    function afterFrame(n) {
      return frames.length > n
    };
  }
};
