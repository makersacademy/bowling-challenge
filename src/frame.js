function Frame(number) {
  this.idNumber = number
  this.firstScore = null;
  this.secondScore = null;
  this.frameTotal = null;
  this.strike = null;
  this.spare = null;
  this.complete = null;
}

Frame.prototype.getFirstScore = function () {
  return this.firstScore
};

Frame.prototype.getSecondScore = function () {
  return this.secondScore
};

Frame.prototype.getTotalFrameScore = function () {
  return (this.getFirstScore() + this.getSecondScore())
};

Frame.prototype.addFirstScore = function (number) {
  this.firstScore = number
  this.frameTotal += this.firstScore
  this._isStrike();
  this._isComplete();
};

Frame.prototype.addSecondScore = function (number) {
  if (this.firstScore != null && (this.frameTotal + number) <= 10)
    this.secondScore = number
  this.frameTotal += this.secondScore
  this._isSpare();
  this._isComplete();
};

Frame.prototype._isStrike = function () {
  if (this.firstScore === 10)
    this.strike = true
};

Frame.prototype._isSpare = function () {
  if (this.frameTotal === 10)
    this.spare = true
};

Frame.prototype._isComplete = function () {
  if (this.firstScore != null && this.secondScore != null)
  this.complete = true
};

function Game() {
  this.scores = []
  this.gameFrames = []
}

Game.prototype.frameScore = function () {

};

Game.prototype.makeFrame = function (number) {
  frame = new Frame(number)
  this.gameFrames << frame
};
