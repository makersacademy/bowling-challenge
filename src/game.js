// Game properties
function Game() {
  this.frameNumber = 1;
  this.scoreTotal = 0;

  this.scoreOne = null;
  this.scoreTwo = null;

  this.isSpare = false;
  this.isStrike = false;
}

// Public methods
Game.prototype.rollOne = function(pins) {
  this.scoreOne = pins;
  this.scoreTotal += pins;
  this._checkStrike();
}

Game.prototype.rollTwo = function(pins) {
  this.scoreTwo = pins;
  this.scoreTotal += pins;
  this._checkSpare();
  this._newFrame();
}

// Private methods
Game.prototype._checkStrike = function() {
  if(this.scoreOne === 10) {
    this.isStrike = true;
    this._newFrame();
  }
}

Game.prototype._checkSpare = function() {
  if(this.scoreOne + this.scoreTwo === 10) {this.isSpare = true;}
}

Game.prototype._newFrame = function() {
  this.scoreOne = null;
  this.scoreTwo = null;
  this.frameNumber++;
}
