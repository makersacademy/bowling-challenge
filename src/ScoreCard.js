function ScoreCard() {
  this.pins = 10;
  this.currentFrame = 1;
  this.roll = 1;
  this.score = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []}
};

ScoreCard.prototype.nextFrame = function() {
  return this.currentFrame < 10 ? this.currentFrame += 1 : "End of game";
};

ScoreCard.prototype.nextRoll = function() {
  return this.roll === 1 ? this.roll = 2 : this.roll = 1;
};

ScoreCard.prototype.rollScore = function(score) {
  this.score[this.currentFrame].push(score);
  if (score === 10 || this.score[this.currentFrame].length === 2) {
    this.pins = 10;
    this.nextFrame();
  }
  else {
    this.pins = this.pins - score;
    this.nextRoll();
  };
};

ScoreCard.prototype.frameTotal = function(frame) {
  var total = 0;
  for (var i=0; i<this.score[frame].length; i++) {
    total += this.score[frame][i];
  };
  return total;
};

ScoreCard.prototype.strikeBonus = function() {
  return this.score[this.currentFrame - 2].push(this.frameTotal(this.currentFrame - 1));
};

ScoreCard.prototype.spareBonus = function() {
  return this.score[this.currentFrame - 1].push(this.score[this.currentFrame][0]);
};
