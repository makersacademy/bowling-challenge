function Game() {
  this.DEFAULT_FRAMES = [[], [], [], [], [], [], [], [], [], []];
  this.frames = this.DEFAULT_FRAMES;
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.allBowls = [];
}

Game.prototype._currentFrameIndex = function() {
  return this.currentFrame - 1;
};

Game.prototype.addBowl = function(score) {
  this.frames[this._currentFrameIndex()].push(score);
  this.allBowls.push(score);
  this._updateTurn();
};

Game.prototype._updateTurn = function() {
  if (this.currentBowl == 1) {
    this.currentBowl++;
  } else {
    this.currentFrame++;
    this.currentBowl = 1;
  }
};

Game.prototype.calculateTotal = function() {
  var total = 0;
  for (var i = 0; i < 20; i++) {
    total += this.allBowls[i];
  }
  return total;
};
