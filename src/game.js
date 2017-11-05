
function Game() {
  this._frames = [];
  this._frame = new Frame();
  this._scores = [];
}

//getter functions

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.frame = function() {
  return this._frame;
};

Game.prototype.scores = function() {
  return this._scores;
};

//functions to aid with scoring

Game.prototype.FrameNo = function() {
  return this.frames.length + 1;
};

Game.prototype.isFirstFrame = function() {
  if (this.frames.length == 0) return true;
};

Game.prototype.FrameIndex = function() {
  return this.frames.length;
};

Game.prototype.saveFrame = function() {
  if (this.frame.isOver == false) throw new Error ("Frame is not over");
  this._frames.push(this._frame);
  this._frame = new Frame();
};

Game.prototype.addToScores = function() {
  score = this._frame.score();
  this._scores.push(score);
};
