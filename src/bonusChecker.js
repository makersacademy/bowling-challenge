'use strict';

function BonusChecker() {};

BonusChecker.prototype = {
  checkBonus: function(frames) {
    var lastFrame = frames[frames.length-1];
    var oneFromLastFrame = frames[frames.length-2];
    var twoFromLastFrame = frames[frames.length-3];

    if (frames.length > 2) {
      if (oneFromLastFrame.isStrike() && twoFromLastFrame.isStrike()) {
        twoFromLastFrame.addBonus(oneFromLastFrame.getScore() + lastFrame.firstRoll);
      } else if (lastFrame.isComplete() && oneFromLastFrame.isStrike()) {
        oneFromLastFrame.addBonus(lastFrame.getScore());
      } else if (oneFromLastFrame.isSpare()) {
        oneFromLastFrame.addBonus(lastFrame.firstRoll);
      }
    } else if (frames.length > 1) {
      if (lastFrame.isComplete() && !lastFrame.isStrike() && oneFromLastFrame.isStrike()) {
        oneFromLastFrame.addBonus(lastFrame.getScore());
      } else if (oneFromLastFrame.isSpare() && oneFromLastFrame.bonus === 0) {
        oneFromLastFrame.addBonus(lastFrame.firstRoll);
      }
    }
  }
};
