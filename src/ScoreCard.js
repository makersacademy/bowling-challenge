function ScoreCard() {
  this.frame = 1;
  this.pins = 10;
  this.roll = 1;
  this.scores = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
}

ScoreCard.prototype.nextFrame = function() {
  return this.frame < 11 ? this.frame += 1 : "End of game!";
}

ScoreCard.prototype.nextRoll = function() {
  return this.roll === 1 ? this.roll = 2: this.roll = 1;
}

ScoreCard.prototype.strike = function() {
  this.scores[this.frame].push(10);
  this.nextFrame();
  return "X";
}

ScoreCard.prototype.scoreForRoll = function(pinsKnockedDown) {
  if (pinsKnockedDown === 10) {
    this.strike();
  }
  else {
    this.scores[this.frame].push(pinsKnockedDown);
    return pinsKnockedDown;
  }
}

ScoreCard.prototype.bonusForSpare = function() {
  return this.scores[this.frame - 1].push(this.scores[this.frame][0]);
}

ScoreCard.prototype.bonusForStrike = function() {
  return this.scores[this.frame - 1].push(this.scores[this.frame].reduce(function(a, b) { return a + b; }));
}

ScoreCard.prototype.scoreForFrame = function(frame) {
  return this.scores[frame].reduce(function(a, b) { return a + b; });
}

ScoreCard.prototype.grandTotal = function(frame) {
  var sum = 0;
  for (var i = 1; i <= this.frame; i++) {
    sum += this.scoreForFrame(i);
  }
  return sum;
}

