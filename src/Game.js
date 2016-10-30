function Game() {
  this.frames = [[]];
  this.bonusCount = 0;
  this.currentFrame = 0;
}

Game.prototype.addScore = function(score) {
  this._checkFrame();
  this._addBonus(score);
  this.frames[this.currentFrame].push(score);
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

Game.prototype._addBonus = function(score) {
  if (score === 10) {
    this.bonusCount += 2;
  }
};
