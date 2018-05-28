function FinalFrame() {
  this.scores = [];
  this.pins = 10;
  this.finish = false;
}

FinalFrame.prototype.bowl = function(score) {
  this._gameOver();
  this._validScore(score);
  this.scores.push(score);
  this.pins -= score;
  this._endGame();

  this._resetPins();

};


FinalFrame.prototype._validScore = function(score) {
  if (score > this.pins) {
    throw "please enter a valid score"
  };
};

FinalFrame.prototype._endGame = function() {
  if ((this.scores.length === 2 && this.pins !== 0) || this.scores.length === 3) {
    this.finish = !this.finish };
};

FinalFrame.prototype._gameOver = function() {
  if (this.finish === true) {
    throw "frame has finished, start a new frame"
  };
};

FinalFrame.prototype._resetPins = function() {
  if (this.pins < 1) {
  this.pins = 10
};
};
