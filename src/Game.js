function Game() {

}

Game.prototype.getFrameNumber = function() {
  return this.frame.currentFrame;
};

Game.prototype.begin = function() {
  this.frame = new Frame(1);
  this.score = new Score();
};

Game.prototype.nextFrame = function() {
  this.frame = new Frame(this.frame.currentFrame + 1);
};

Game.prototype.saveScore = function() {
  this.score.frameScores.push({first: this.frame.firstPinsDown,
                               second: this.frame.secondPinsDown});
  this._updateTotal();
};

//interface

Game.prototype.start = function() {
  this.frame.firstRoll();
  this.frame.secondRoll();
  this.saveScore();
  this._repeat();
};

//private

Game.prototype._updateTotal = function() {
  this.score.total += (this.frame.firstPinsDown + this.frame.secondPinsDown);
};

Game.prototype._repeat = function() {
  if (this.getFrameNumber() < 10) {
    this.nextFrame();
  }  
};
