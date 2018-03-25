function Game() {
  this._score = 0;
  this._frames = [];

  Game.prototype.getScore = function() {
    return this._score;
  }

  Game.prototype.addFrame = function(frame) {
    this._frames.push(frame);
  }

  Game.prototype.frameLength = function() {
    return this._frames.length;
  }

  Game.prototype.getFrames = function() {
    return this._frames;
  }

  Game.prototype.lastFrame = function() {
    return this._frames.slice(-1)[0]
  }

}
