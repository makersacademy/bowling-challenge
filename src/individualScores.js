"use strict";

(function(exports) {

  function IndividualScores() {
  };

  IndividualScores.prototype.isStrike = function(roll1) {
    return roll1 === 10;
  };

  IndividualScores.prototype.isConsecutiveFrameStike = function(roll1, roll3) {
    return roll1 === 10 && roll3 === 10;
  };

  IndividualScores.prototype.isFinalFrameStrikeWithBonusStrike = function(index, roll1, roll3) {
    return index === 9 && roll1 === 10 && roll3 === 10;
  };

  IndividualScores.prototype.isSpare = function(roll1, roll2) {
    return roll1 + roll2 === 10;
  };

  exports.IndividualScores = IndividualScores;
})(this);
