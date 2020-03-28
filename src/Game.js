'use strict';

function Game() {
  this.rolls = [];
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Game.prototype.returnScore = function() {
  var score = 0;
  var rollIndex = 0;
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      var frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
        // spare logic (10 + next roll)
        score += frameScore + this.rolls[rollIndex + 2];
      } else {
        score += frameScore;
      }

      rollIndex += 2;
    }

  return score;
}


// Game.prototype.currentScore = function (){
//   var score = 0;
//   var frameIndex = 0;
//   for (var frame = 0; frame < 10; frame++) {
//     if (this._isStrike(frameIndex)) {
//       score += 10 + this._strikeBonus(frameIndex);
//       frameIndex++;
//     } else if (this._isSpare(frameIndex)) {
//       score += 10 + this._spareBonus(frameIndex);
//       frameIndex += 2;
//     } else {
//       score += this._sumOfBalls(frameIndex);
//       frameIndex += 2;
//     }
//   }
//   return score;
// };
