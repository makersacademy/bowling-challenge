function BowlingCard() {
  this.card = [];
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.strike = false;
  this.spare = false;
  this.totalScore = 0;
};

BowlingCard.prototype.enterRoll = function(number) {
  this._storeRoll(number);
  if (this.rollNumber == 1) { this._addToNewFrame(); }
  else { this._addToCurrentFrame();
  };
};

BowlingCard.prototype._storeRoll = function(pinsDown) {
    this.currentRoll = new Roll();
    this.currentRoll.pinsDown = pinsDown
    this.totalScore += pinsDown;
};

BowlingCard.prototype._addToNewFrame = function() {
  this._createNewFrame();
  if (this.spare == true) { this._addBonusToPrevFrame() }
  this._checkIfStrike();
};

BowlingCard.prototype._addToCurrentFrame = function() {
  this.currentFrame.addRoll(this.currentRoll);
  this.card.push(this.currentFrame);
  this._endOfFrameChecks();
};

BowlingCard.prototype._createNewFrame = function() {
  this.currentFrame = new Frame();
  this.currentFrame.addRoll(this.currentRoll);
  this.rollNumber = 2;
};

BowlingCard.prototype.showRoll = function(number) {
  return this.currentFrame.rolls[number - 1];
};

BowlingCard.prototype._addBonusToPrevFrame = function() {
  this._updatePrevFrameScore();
  this.totalScore += this.currentFrame.score;
  this.strike = false;
};

BowlingCard.prototype._updatePrevFrameScore = function() {
  var prevFrame = this.card[this.frameNumber - 2];
  prevFrame.score += this.currentFrame.score;
};

BowlingCard.prototype._createRoll = function() {
  this.currentFrame.addRoll(this.currentRoll);
};

BowlingCard.prototype._checkIfStrike = function() {
  if (this.currentFrame.strike == true) {
    this._completeStrikeFrame();
  };
};

BowlingCard.prototype._completeStrikeFrame = function() {
  this.enterRoll(0);
  this.strike = true;
  this.spare = false;
};

BowlingCard.prototype._endOfFrameChecks = function() {
  if (this.strike == true) { this._addBonusToPrevFrame();};
  if (this.currentFrame.score == 10) { this.spare = true};
  this._updateCounts();
};

BowlingCard.prototype._updateCounts = function() {
  this.frameNumber += 1;
  this.rollNumber = 1;
};
