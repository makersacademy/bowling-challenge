function Game() {
  this.frames = [[[]]];
  this.currentFrame = 0;
}

Game.prototype.addScore = function(score) {
  if (this.currentFrame === 9 && this.frames[this.currentFrame].length >= 1) {
    this._tenthFrame(score);
  } else {
    this._checkFrame();
    this._currentFrameScore().push(score);
    this._applyBonus(score);
    this._checkBonus(score);
  }
};

Game.prototype.frameTotal = function() {
 return this._currentFrameScore().reduce(function(a, b) {
    return a + b;
  }, 0);
};

Game.prototype.total = function() {
  var total = 0;
  for (var i = 0; i < this.frames.length; i++) {
    total += this.frames[i][0].reduce(function(a, b) {
      return a + b;
    }, 0);
  }
  return total;
};

Game.prototype._tenthFrame = function(score) {
  if ((this._currentFrameBonus() > 0 || this._currentFrameScore().length == 1) && (this._currentFrameScore().length < 3)) {
    this._currentFrameScore().push(score);
    this._checkBonus(score);
    if (this.frames[8][1] == 1) {
      this.frames[8][0].push(score);
      this.frames[this.currentFrame - 1][1] -= 1;
    }
  }
};

Game.prototype._checkFrame = function() {
  if (this._currentFrameScore().length == 2 || this._currentFrameScore()[0] == 10) {
    this._addFrame();
  }
};

Game.prototype._addFrame = function() {
  this.currentFrame += 1;
  this.frames.push([[]]);
};

Game.prototype._checkBonus = function(score) {
  if (score === 10) {
    this.frames[this.currentFrame].push(2);
  } else if (this.frameTotal() === 10) {
    this.frames[this.currentFrame].push(1);
  }
};

Game.prototype._applyBonus = function(score) {
  for(var i = 0; i < this.frames.length; i++) {
    if (this.frames[i][1] >= 1) {
      this.frames[i][0].push(score);
      this.frames[i][1] -= 1;
    }
  }
};

Game.prototype._currentFrameScore = function() {
  return this.frames[this.currentFrame][0];
};

Game.prototype._currentFrameBonus = function() {
  return this.frames[this.currentFrame][1];
};
