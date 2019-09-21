function BowlingCard() {
  this.strike = false;
  this.frame = 1;
  this.rollNumber = 1;
  // this.frameComplete = false;
  this.card = [];
  this.frameScore = 0;
  this.spare = false;
};

BowlingCard.prototype.enterRoll = function(number) {
  this.roll = new Roll();
  this.roll.pinsDown = number
  this.frameScore += number;
  if (this.rollNumber ==1) { this._createNewFrame() }else{ this._addToFrame()}
  if (this.rollNumber == 1 && this.frameScore == 10) { this.strike = true; };
  if (this.rollNumber == 2 && this.frameScore == 10) { this.spare = true};
  this.rollNumber += 1
};

BowlingCard.prototype.showRoll = function(number) {
  return this.currentFrame.rolls[number - 1];
};

BowlingCard.prototype._createNewFrame = function() {
  this.currentFrame = new Frame();
  this.currentFrame.addRoll(this.roll);
};

BowlingCard.prototype._addToFrame = function() {
  this.currentFrame.addRoll(this.roll);
};
