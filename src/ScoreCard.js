function ScoreCard() {
  this.frame = 1;
  this.pins = 10;
  this.bowl = 1;
  this.score = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []};
};

ScoreCard.prototype.moveFrame = function() {
  if (this.frame === 10) {
    throw new Error('Game Over!');
  } else {
    this.frame += 1;
    this.pins = 10;
    this.bowl = 1;
  }
};

ScoreCard.prototype.nextBowl = function() {
  if (this.bowl >= 4) {
    this.moveFrame();
  } else {
    this.bowl += 1;
  }
};

ScoreCard.prototype.scoreBowl = function(score) {
  this.score[this.frame].push(score);
  if (this.frame === 10) {
    this._tenthFrame();
  } else if (score === 10 || this.score[this.frame].length === 2) {
    this.moveFrame();
  } else {
    this.pins -= score;
    this.nextBowl();
  }
};

ScoreCard.prototype.frameScore = function(frame) {
  var total = 0;
  for (var i = 0; i < this.score[frame].length; i++) {
    total += this.score[frame][i];
  };
  return total;
};

ScoreCard.prototype.runningTotal = function(frame) {
  var total = 0;
  for (var i = 1; i <= this.frame; i++) {
    total += this.frameScore(i);
  }
  return total;
}

ScoreCard.prototype.bonusForSpare = function() {
  this.score[this.frame - 2].push(this.score[this.frame - 1][0]);
};

ScoreCard.prototype.bonusForStrike = function() {
  this.score[this.frame - 2].push(this.frameScore(this.frame - 1));
};

ScoreCard.prototype.checkStrike = function() {
  return this.score[this.frame -1][0] === 10;
};

ScoreCard.prototype.checkSpare = function() {
  return (this.score[this.frame - 1].length === 2 && this.frameScore(this.frame - 1) === 10);
};

ScoreCard.prototype._tenthFrame = function() {
  if (this.score[10][0] + this.score[10][1] < 10) {
    this.moveFrame();
  } else {
    this.nextBowl();
  }
};
