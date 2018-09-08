function Game(frame = new Frame()) {
  // This tracks the overall player score
  this.score = 0
  this.currentFrame = frame
  this.frames = [frame]
};

Game.prototype.add_score = function(score) {
  this.frames[this.frames.length - 1].add_score(score);
  if (this._currentFrameOver()) {
    this._endOfFrameProcess()
  }
};

Game.prototype.updateScore = function() {
  this.score += this.frames[this.frames.length - 1].flatscore
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
