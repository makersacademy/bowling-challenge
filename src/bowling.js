function BowlingCard() {
  this.card = [];
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.strike = false;
  this.spare = false;
  this.totalScore = 0;
  this.bonus = 0;
};

BowlingCard.prototype.enterRoll = function(number) {
  this.currentRoll = new Roll();
  this.currentRoll.pinsDown = number
  this.totalScore += number;
  if (this.rollNumber == 1) {
    this._createNewFrame(); } else { this._addToFrame(); };
};

BowlingCard.prototype.showRoll = function(number) {
  return this.currentFrame.rolls[number - 1];
};

BowlingCard.prototype._createNewFrame = function() {
  this.currentFrame = new Frame();
  this.currentFrame.addRoll(this.currentRoll);
  this.rollNumber = 2;
  this._checkIfStrike();
};

BowlingCard.prototype._addToFrame = function() {
  this.currentFrame.addRoll(this.currentRoll);
  this.card.push(this.currentFrame);
  if (this.strike == true) {
    this._addBonusToPrevFrame();
    this.strike = false;
  };
  this.frameNumber += 1;
  this.rollNumber = 1;
  if (this.currentFrame.score == 10) { this.spare = true};
};

BowlingCard.prototype._addBonusToPrevFrame = function() {
  var prevFrame = this.card[this.frameNumber - 2];
  prevFrame.score += this.currentFrame.score;
  this.totalScore += this.currentFrame.score;
};

BowlingCard.prototype._createRoll = function() {
  this.currentFrame.addRoll(this.currentRoll);
};

BowlingCard.prototype._checkIfStrike = function() {
  if (this.currentFrame.score == 10) {
    this.enterRoll(0);
    this.strike = true;
  };
};
