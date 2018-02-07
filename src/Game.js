function Game() {
  this.frames = [
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame()
  ];
  this.frameCount = 0
};

Game.prototype.add = function(roll1, roll2) {
  this.frames[this.frameCount].add(roll1, roll2);
  if (this.frames[this.frameCount - 1] !== undefined && this.frames[this.frameCount - 1].spare === true) {
    this.frames[this.frameCount - 1].bonus += roll1;
  }
  this.frameCount += 1;
};

Game.prototype.total = function() {
  total = 0
  for (var i = 0; i < this.frames.length; i++) {
    if (this._isNotEmpty(i)) {
      total += this.frames[i].total();
    };
  };
  return total;
};

// private methods

Game.prototype._isNotEmpty = function(i) {
  return this.frames[i].rolls.length !== 0
};
