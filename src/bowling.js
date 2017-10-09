function Game() {
this.score = 0
this.bowlCount = []
this.rollCount = 0
this.isStrike = false
this.isSpare = false
}

Game.prototype.bowl = function(pins) {
if(this.bowlCount.length < 21 && pins < 11) {
this.bowlCount.push(pins);
this.confirmIsStrike();
this.confirmIsSpare();
this.updateRollCount();
} else if(this.bowlCount.length < 21 && pins > 10){
  throw "You can't enter a score greater than 10."
} else {
  throw "The game is complete.";
  }
};

// Game.prototype.updateScore = function() {
//   for (var i = 0; i < 10; i++) {
//     if (this.confirmIsStrike) {
//       this.score += this.strikeFrameScore();
//       this.updateRollCount();
//     } else if (this.confirmIsSpare) {
//       this.score += this.spareFrameScore;
//       this.updateRollCount();
//     } else {
//       this.score += this.normalFrameScore;
//       this.updateRollCount();
//     }
//   }
// }

Game.prototype.updateRollCount = function() {
  if (this.isStrike) {
    this.rollCount++;
  } else {
    this.rollCount += 2;
  }
}

Game.prototype.confirmIsStrike = function() {
  if(this.bowlCount[this.rollCount] === 10) {
    this.isStrike = true;
  }
}

Game.prototype.confirmIsSpare = function() {
  if(this.bowlCount.slice(-1)[0] + this.bowlCount.slice(-2)[0] === 10) {
    this.isSpare = true
  }

Game.prototype.strikeFrameScore = function() {
  this.bowlcount[this.rollCount] + this.bowlCount[this.rollCount + 1] + this.bowlCount(this.rollCount + 2);
}

Game.prototype.spareFrameScore = function() {
  this.bowlcount[this.rollCount] + this.bowlCount[this.rollCount + 1] + this.bowlCount(this.rollCount + 2);
}

Game.prototype.normalFrameScore = function() {
  this.bowlCount[this.rollCount] + this.bowlCount[this.rollCount + 1];
}

}
