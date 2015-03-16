var Scorecard = function(content) {
  this.frameRecord = [];
  this.totals = [];
  this.DEFAULT_FRAMES = 10;
  this.currentTurn = 0;
  this.currentFrame = 0;
  this.maxTurns = 20;
  for (var i = 0; i < this.DEFAULT_FRAMES; i++) {
    this.frameRecord.push(new content);
  };
};

Scorecard.prototype.updateTotal = function() {
  this.totals.push(this.frameRecord[this.currentFrame].result);  
};

Scorecard.prototype.addBonusToCurrentFrameMinus = function(bonusFrame, pinsKnockedOver) {
  this.totals[this.currentFrame - bonusFrame] += pinsKnockedOver;
}

Scorecard.prototype.isPreviousFrameStrike = function() {
  if (this.currentFrame > 0 && this.frameRecord[this.currentFrame - 1].strike) return true;
};

Scorecard.prototype.isPreviousFrameSpare = function() {
  if (this.currentFrame > 0 && this.frameRecord[this.currentFrame - 1].spare && this.isFirstBowl()) return true;
}

Scorecard.prototype.isTwoPreviousFrameStrike = function() {
  if (this.currentFrame > 1 && this.frameRecord[this.currentFrame - 2].strike && this.isFirstBowl()) return true;
}

Scorecard.prototype.isFirstBowl = function() {
  if (this.frameRecord[this.currentFrame].firstBowl === null) return true;
}

Scorecard.prototype.isFinalFrameSpare = function() {
  if (this.frameRecord[this.currentFrame].spare) return true;
}

Scorecard.prototype.isFinalFrameStrike = function() {
  if (this.frameRecord[this.currentFrame].strike) return true;
}

Scorecard.prototype.isBowlStrike = function(pinsKnockedOver) {
  if (this.checkEven(this.currentTurn) && pinsKnockedOver === 10) this.incrementTurn();
}

Scorecard.prototype.isFrameOver = function() {
  if (this.checkEven(this.currentTurn) != true) return true;
}

Scorecard.prototype.incrementTurn = function() {
  this.currentTurn ++;
  this.updateCurrentFrame();
  if (this.currentTurn === 20) this.checkForBonusRound();
}

Scorecard.prototype.checkForBonusRound = function() {
  if (this.isFinalFrameStrike() || this.isFinalFrameSpare()) this.extraOne = true;
  if (this.isFinalFrameStrike()) this.extraTwo = true;
}

Scorecard.prototype.bowl = function(pinsKnockedOver) {
  if (this.currentTurn < 20) {
    this.bowlNormalRound(pinsKnockedOver);
    this.incrementTurn();
  } else { this.bowlBonusRound(pinsKnockedOver) };
};

Scorecard.prototype.bowlNormalRound = function(pinsKnockedOver) {
  this.isBowlStrike(pinsKnockedOver);
  if (this.isPreviousFrameStrike() || this.isPreviousFrameSpare()) this.addBonusToCurrentFrameMinus(1, pinsKnockedOver);
  if (this.isPreviousFrameStrike() && this.isTwoPreviousFrameStrike()) this.addBonusToCurrentFrameMinus(2, pinsKnockedOver);
  this.frameRecord[this.currentFrame].receiveBowl(pinsKnockedOver);
  if (this.isFrameOver()) this.updateTotal();
};

Scorecard.prototype.bowlBonusRound = function(pinsKnockedOver) {
  if (this.extraOne) this.addBonusToCurrentFrameMinus(0, pinsKnockedOver);
  if (this.extraOne && this.isPreviousFrameStrike()) this.addBonusToCurrentFrameMinus(1, pinsKnockedOver);
  this.extraOne = false
  if (this.extraOne === false && this.extraTwo === true) { 
    this.addBonusToCurrentFrameMinus(0, pinsKnockedOver);
    this.extraTwo = false; 
  };
};

Scorecard.prototype.updateCurrentFrame = function() {
  if (this.currentTurn >= 20) {
    this.currentFrame = 9;
  } else if (this.checkEven(this.currentTurn)) {
    this.currentFrame = (this.currentTurn) / 2;
  } else {
    this.currentFrame = (this.currentTurn - 1) / 2;  
  };
};

Scorecard.prototype.checkEven = function(number) {
  if (number % 2 === 0) return true;
};

Scorecard.prototype.currentTotal = function() {
  return this.totals.reduce(function (total, num) { return total + num });
};