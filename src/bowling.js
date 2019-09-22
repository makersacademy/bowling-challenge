function BowlingCard() {
  this.card = [];
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.strikeFlag = false;
  this.spareFlag = false;
  this.totalScore = 0;
};

BowlingCard.prototype.enterRoll = function(number) {
  if (this.complete == true) throw 'Card already complete';
  this._storeRoll(number);
  this._addRollToFrame();
};

BowlingCard.prototype._storeRoll = function(pinsDown) {
    this.currentRoll = new Roll();
    this.currentRoll.pinsDown = pinsDown
    this.totalScore += pinsDown;
};

BowlingCard.prototype._addRollToFrame = function(){
  if (this.rollNumber == 1) { this._addToNewFrame(); }
  else { this._addToCurrentFrame();
  };
};

BowlingCard.prototype._addToNewFrame = function() {
  this._createNewFrame();
  if (this.spareFlag == true) { this._addBonusToPrevFrame() }
  this._checkIfStrike();
};

BowlingCard.prototype._addToCurrentFrame = function() {
  this.currentFrame.addRoll(this.currentRoll);
  this.card.push(this.currentFrame);
  this._endOfFrameChecks();
};

BowlingCard.prototype._createNewFrame = function() {
  this.currentFrame = new Frame();
  if (this.frameNumber == 10) {this.currentFrame.lastFrame = true}
  this.currentFrame.addRoll(this.currentRoll);
  this.rollNumber = 2;
};

BowlingCard.prototype._createRoll = function() {
  this.currentFrame.addRoll(this.currentRoll);
};

BowlingCard.prototype._checkIfStrike = function() {
  if (this.currentFrame.strike == true && this.frameNumber < 10) {
    this._completeStrikeFrame();
  };
};

BowlingCard.prototype._completeStrikeFrame = function() {
  this.enterRoll(0);
  this.strikeFlag = true;
  this.spareFlag = false;
};

BowlingCard.prototype._endOfFrameChecks = function() {
  if (this.strikeFlag == true) { this._addBonusToPrevFrame();};
  if (this.currentFrame.score == 10) { this.spareFlag = true};
  if (this.frameNumber == 10 && this.currentFrame.score < 10) { this.complete = true }
  this._updateCounts();
};

BowlingCard.prototype._addBonusToPrevFrame = function() {
  this._updatePrevFrameScore();
  this.totalScore += this.currentFrame.score;
  this.strikeFlag = false;
};

BowlingCard.prototype._updatePrevFrameScore = function() {
  var prevFrame = this.card[this.frameNumber - 2];
  prevFrame.score += this.currentFrame.score;
  if (prevFrame.strike == true && this.frameNumber >= 3) {
    this._updatePrevPrevFrameScore();
  };
};

BowlingCard.prototype._updatePrevPrevFrameScore = function() {
  var prevPrevFrame = this.card[this.frameNumber - 3];
  if (prevPrevFrame.strike == true) {
    prevPrevFrame.score += this.currentFrame.rolls[0];
    this.totalScore += this.currentFrame.rolls[0];
  };
};

BowlingCard.prototype._updateCounts = function() {
  this.frameNumber += 1;
  if (this.frameNumber < 11) {
    this.rollNumber = 1;
  }else{this.rollNumber += 1}
};
