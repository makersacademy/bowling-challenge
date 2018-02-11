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

Game.prototype.add = function(roll1, roll2 = 0) {
  this.frames[this.frameCount].add(roll1, roll2);
  if (this._isPreviousSpare()) {
    this._addSpareBonus(roll1);
  }
  if (this._isPreviousStrike()) {
    this._addStrikeBonus(roll1, roll2)
  }
  if (this._isLastTwoFramesStrike()) {
    this._addSecondStrikeBonus(roll1)
  }
  this._nextFrame();
};

Game.prototype.total = function() {
  total = 0;
  this.frames.forEach(function(frame) {
    if (frame.rolls[0] !== undefined) {
      total += frame.total();
    };
  });
  return total;
};

// private methods

Game.prototype._eachScore = function() {
  this.frames.forEach(function(frame) {
    frame.rolls;
  });
};

Game.prototype._isNotEmpty = function(i) {
  return this.frames[i].rolls.length !== 0
};

Game.prototype._isPreviousSpare = function() {
  return (this.frames[this.frameCount - 1] !== undefined) && (this.frames[this.frameCount - 1].spare === true)
};

Game.prototype._addSpareBonus = function(roll1) {
  this.frames[this.frameCount - 1].bonus += roll1;
};

Game.prototype._isPreviousStrike = function() {
  return (this.frames[this.frameCount - 1] !== undefined) && (this.frames[this.frameCount - 1].strike === true)
};

Game.prototype._addStrikeBonus = function(roll1, roll2) {
  this.frames[this.frameCount - 1].bonus += (roll1 + roll2);
};

Game.prototype._isLastTwoFramesStrike = function() {
  return (this.frames[this.frameCount - 2] !== undefined) && (this.frames[this.frameCount - 2].strike === true) && (this.frames[this.frameCount -1].strike === true)
}

Game.prototype._nextFrame = function() {
  this.frameCount += 1;
};

Game.prototype._addSecondStrikeBonus = function(roll1) {
  this.frames[this.frameCount - 2].bonus += roll1
};
