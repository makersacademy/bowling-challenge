function Frame(game, frameIndex) {
  this.game = game;
  this.frameIndex = frameIndex;
  this.frameRolls = [0, 0];
  this.rollIndex = 0;
}

Frame.prototype.addRoll = function(roll) {
  this.frameRolls[this.rollIndex] = roll;
};

Frame.prototype.calculateFrameScore = function() {
  if (this.isStrike()) {
    return this.calculateStrikeScore();
  } else if (this.isSpare()) {
    return this.calculateSpareScore();
  } else {
    return this.calculateScore();
  }
};

Frame.prototype.getNextFrame = function(frame) {
  return this.game.frames[this.frameIndex + 1];
};

Frame.prototype.getNextNextFrame = function(frame) {
  return this.game.frames[this.frameIndex + 2];
};

Frame.prototype.updateRollIndex = function() {
  this.rollIndex += 1;
};

Frame.prototype.isStrike = function() {
  return this.frameRolls[0] == 10;
};

Frame.prototype.isDone = function() {
  return this.rollIndex == 2;
};

Frame.prototype.isSpare = function() {
  return this.frameRolls[0] + this.frameRolls[1] == 10;
};

Frame.prototype.calculateStrikeScore = function() {
  return this.frameRolls[0] + this.getNextFrame(this).frameRolls[0] + this.getNextFrame(this).frameRolls[1] + this.getNextNextFrame(this).frameRolls[0];
};

Frame.prototype.calculateSpareScore = function() {
  return this.frameRolls[0] + this.frameRolls[1] + this.getNextFrame(this).frameRolls[0];
};

Frame.prototype.calculateScore = function() {
  return this.frameRolls[0] + this.frameRolls[1];
};
