'use-strict';

function Frame(scoresheet) {
  this.rolls = [];
  this.scoresheet = scoresheet;
  this.frameScore = scoresheet.score;
  this.FRAME_SIZE = 2;
}

Frame.prototype.addRoll = function(pins) {
  if (this.rolls.length < this.FRAME_SIZE) {
    this.rolls.push(pins);
    this.frameScore += pins;
  } else {
    this.scoresheet.addToScore()
  }
}
