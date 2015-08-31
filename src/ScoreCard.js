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
  if (this.frame === 10 && this.scores[10].length > 0) {
    if (this.scores[10][0] + this.scores[10][1] >= 10) {
      return this.roll = 3;
    }
  }
  return this.roll === 1 ? this.roll = 2: this.roll = 1;
}

ScoreCard.prototype.strike = function() {
  this.scores[this.frame].push(10);
  if (this.frame !== 10) {
    this.nextRoll();
  }
  return "X";
}

ScoreCard.prototype.scoreForRoll = function(pinsKnockedDown) {
  if (pinsKnockedDown === 10) {
    return this.strike();
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

ScoreCard.prototype.pinsLeft = function(pinsKnockedDown) {
  this.pins = 10 - pinsKnockedDown;
  return this.pins;
}

ScoreCard.prototype.resetPins = function() {
  this.pins = 10;
}

ScoreCard.prototype.isPreviousFrameStrike = function() {
  return this.scores[this.frame - 1][0] === 10;
}

ScoreCard.prototype.isPreviousFrameSpare = function() {
  return (this.scores[this.frame - 1].length === 2 && this.scoreForFrame(this.frame - 1) === 10)
}


