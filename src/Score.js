function Game(frame = new Frame()) {
  // This tracks the overall player score
  this.score = 0
  this.frames = [frame]
};

Game.prototype.add_score = function(score) {
  currentframe = this.frames[this.frames.length - 1]
  currentframe.add_score(score);

  this._add_bonus(currentframe.ball);

  if (this._currentFrameOver()) {
    this._endOfFrameProcess()
  }
};

Game.prototype._add_bonus = function () {
  if (this.frames.length > 1) {
    currentframe = this.frames[this.frames.length - 1]
    previousframe = this.frames[this.frames.length - 2]
    if (previousframe.bonusBalls == currentframe.ball && previousframe.bonusBalls == 1) {
      previousframe.add_bonus(currentframe.scores[0])
    } else if (previousframe.bonusBalls == currentframe.ball && previousframe.bonusBalls == 2) {
      previousframe.add_bonus(currentframe.flatscore)
    }
  }
}

Game.prototype.updateScore = function() {
  this.score += this.frames[this.frames.length - 1].flatscore
  if (this.frames.length > 1) {
    this.score += this.frames[this.frames.length - 2].bonusscore
  }
  return this.score;
};

Game.prototype._endOfFrameProcess = function() {
  this.updateScore();
  this._add_frame();
};

Game.prototype._currentFrameOver = function() {
  return this.frames[this.frames.length - 1].isOver;
};

Game.prototype._add_frame = function(frame = new Frame()) {
  this.frames.push(frame)
};
