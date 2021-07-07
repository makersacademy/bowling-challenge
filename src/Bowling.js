'use strict';

function BowlingGame() {
  this.scores = [];
  this.pinLog = [0,0]
  this.display = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: []};
  this.firstRoll = true;
  this.multiplier = this.frame = this.strike = 0;
  this.frameScores = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: []};
};
var display;

BowlingGame.prototype.addPoints = function(points) {
  if (this.firstRoll) this.frame++;
  this.multiplier = this.getMultiplier();
  this.display[this.frame].push(points);
  this.scores.push(points * this.multiplier);
  this.pinLog.push(points);
  this.switchRoll(points);
};
BowlingGame.prototype.total = function() {
  return this.scores.reduce((x, y) => x + y); 
}

BowlingGame.prototype.getMultiplier = function() {
  if (this.isLastFrameBonus() && this.isStrike()){
    return (this.firstRoll) ? 13 - this.frame : 1;
  } else if (this.isDoubleStrike()) {
    return 3;
  } else if (this.isStrike() || this.firstRoll && this.isSpare() && this.frame <=10) {
    return 2;
  } else return  1;
}

BowlingGame.prototype.switchRoll = function(points) {
  this.strike = Math.max(0, this.strike - 1);
  if (points === 10 && this.firstRoll) {
    this.strike = 2;
    this.firstRoll = !this.firstRoll;
  }
  this.firstRoll = !this.firstRoll;
}
BowlingGame.prototype.isStrike = function() {
  return this.strike !== 0
}
BowlingGame.prototype.isDoubleStrike = function() {
  return this.pinLog.slice(-2).reduce((x, y) => x + y) === 20
}
BowlingGame.prototype.isSpare = function() {
  return this.pinLog.slice(-2).reduce((x, y) => x + y) === 10
}
BowlingGame.prototype.isLastFrameBonus = function() {
  return this.frame > 10
}

// BowlingGame.prototype.updateDisplay() {
//   for (var i = 1; i < this.display.length; i++) {
//     if (this.display[i].length === 2) {
//       this.frameScores[i] = this.display[i].reduce((x, y) => x + y)
//     } else if (this.display[i].length === 2 && this.length.reduce((x, y) => x + y) === 10) {
//       this.frameScores[i] = this.display[i].reduce((x, y) => x + y) + this.display[i][0]
//     } else {
//       this.frameScores[i] = this.display[i]
//     }
//   }
// }