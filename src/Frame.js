function Frame() {
  this.scores = [];
  this.pins = 10;
  this.finish = false
}

Frame.prototype.bowl = function(score) {
  this._frameOver();
  this._validScore(score);
  this.scores.push(score);
  this.pins -= score;
  this._endTurn();
};


Frame.prototype._validScore = function(score) {
  if (score > this.pins) {
    throw "please enter a valid score"
  };
};

Frame.prototype._endTurn = function() {
  if (this.pins === 0 || this.scores.length === 2) {
  this.finish = !this.finish};
};

Frame.prototype._frameOver = function() {
  if (this.finish === true) {
    throw "frame has finished, start a new frame"
  };
};
