//
function Scorecard() {
  this.scores = [];
}


Scorecard.prototype.evaluate = function(frame) {
  this.addBonus(frame);
  this.bonus = frame.hasBonus();
  this._addTotalScore(frame.totalScore());
}

Scorecard.prototype.addBonus = function(frame) {
  if (this.bonus === 'spare') {
    this.scores[this.scores.length-1] += frame.scores[0];
    this.bonus = null;
  }
  else if (this.bonus === 'strike') {
    if (this.scores[this.scores.length-2] === 20) {
      this.scores[this.scores.length-2] += 10;
    }
    this.scores[this.scores.length-1] += frame.totalScore();
    this.bonus = null;
  }
}

Scorecard.prototype._addTotalScore = function(score) {
  this.scores.push(score);
}
