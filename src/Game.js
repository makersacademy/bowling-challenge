function Game() {
  this.frames = [[]];
  this.bonusCount = 0;
  this.currentFrame = 0;
}

Game.prototype.addScore = function(score) {
  this._checkFrame();
  this.frames[this.currentFrame].push(score);
  this._addBonus(score);
  this._checkBonus(score);
};

Game.prototype.frameTotal = function() {
  return this.frames[this.currentFrame].reduce(function(a, b) {
    return a + b;
  }, 0);
};

Game.prototype.total = function() {
  var total = 0;
  for (var i = 0; i < this.frames.length; i++) {
    total += this.frames[i].reduce(function(a, b) {
      return a + b;
    }, 0);
  }
  return total;
};

Game.prototype._checkFrame = function() {
  if (this.frames[this.currentFrame].length == 2 || this.frames[this.currentFrame][0] == 10) {
    this._addFrame();
  }
};

Game.prototype._addFrame = function() {
  this.currentFrame += 1;
  this.frames.push([]);
};

Game.prototype._checkBonus = function(score) {
  if (score === 10) {
    this.bonusCount += 2;
  } else if (this.frameTotal() === 10) {
    this.bonusCount += 1;
  }
};

Game.prototype._addBonus = function(score) {
  if (this.bonusCount !== 0) {
    this.frames[this.currentFrame - 1].push(score);
    this.bonusCount -= 1;
  }
};
