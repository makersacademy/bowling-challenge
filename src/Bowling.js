var Bowling = function(content) {
  this.frames = [];
  this.totals = [];
  this.DEFAULT_FRAMES = 10;
  this.currentTurn = 0;
  this.currentFrame = 0;
  for (var i = 0; i < this.DEFAULT_FRAMES; i++) {
    this.frames.push(new content);
  };
};

Bowling.prototype.updateTotal = function() {
  this.totals.push(this.frames[this.currentFrame].result);
};

Bowling.prototype.addBonusToCurrentFrameMinus = function(bonusFrame, hits) {
  this.totals[this.currentFrame - bonusFrame] += hits;
}

Bowling.prototype.isPreviousFrameStrike = function() {
  if (this.currentFrame > 0 && this.frames[this.currentFrame - 1].strike) return true;
};

Bowling.prototype.isPreviousFrameSpare = function() {
  if (this.currentFrame > 0 && this.frames[this.currentFrame - 1].spare && this.isFirstBowl()) return true;
}

Bowling.prototype.isTwoPreviousFrameStrike = function() {
  if (this.currentFrame > 1 && this.frames[this.currentFrame - 2].strike && this.isFirstBowl()) return true;
}

Bowling.prototype.isFirstBowl = function() {
  if (this.frames[this.currentFrame].firstBowl === null) return true;
}

Bowling.prototype.isFrameSpare = function() {
  if (this.frames[this.currentFrame].spare) return true;
}

Bowling.prototype.isFrameStrike = function() {
  if (this.frames[this.currentFrame].strike) return true;
}

Bowling.prototype.isBowlStrike = function(hits) {
  if ((this.currentTurn % 2 === 0) && hits === 10) this.nextTurn();
}

Bowling.prototype.isFrameOver = function() {
  if (this.currentTurn % 2 !== 0) return true;
}

Bowling.prototype.nextTurn = function() {
  this.currentTurn ++;
  this.nextFrame();
  if (this.currentTurn === 20) this.checkFinalRound();
}

Bowling.prototype.checkFinalRound = function() {
  if (this.isFrameSpare()) this.extraOne = true;
  if (this.isFrameStrike()) this.extraOne = true;
  if (this.isFrameStrike()) this.extraTwo = true;
}

Bowling.prototype.bowl = function(hits) {
  if (this.currentTurn < 20) {
    this.bowlNormalRound(hits);
    this.nextTurn();
  } else { this.bowlBonusRound(hits) };
};

Bowling.prototype.bowlNormalRound = function(hits) {
  this.isBowlStrike(hits);
  if (this.isPreviousFrameStrike() || this.isPreviousFrameSpare()) this.addBonusToCurrentFrameMinus(1, hits);
  if (this.isPreviousFrameStrike() && this.isTwoPreviousFrameStrike()) this.addBonusToCurrentFrameMinus(2, hits);
  this.frames[this.currentFrame].receiveBowl(hits);
  if (this.isFrameOver()) this.updateTotal();
};

Bowling.prototype.bowlBonusRound = function(hits) {
  if (this.extraOne) this.addBonusToCurrentFrameMinus(0, hits);
  if (this.extraOne && this.isPreviousFrameStrike()) this.addBonusToCurrentFrameMinus(1, hits);
  this.extraOne = false
  if (this.extraOne === false && this.extraTwo) this.bowlBonusRoundTwo(hits);
};

Bowling.prototype.bowlBonusRoundTwo = function(hits) {
  this.addBonusToCurrentFrameMinus(0, hits);
  this.extraTwo = false;
}

Bowling.prototype.nextFrame = function() {
  if ((this.currentTurn % 2 === 0) && this.currentTurn != 20) { this.currentFrame = (this.currentTurn) / 2}
  else { this.currentFrame = Math.floor((this.currentTurn - 1) / 2) };
};

Bowling.prototype.currentTotal = function() {
  return this.totals.reduce(function (total, num) { return total + num });
};