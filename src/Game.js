function Game() {
  this.frames = [];
  this.currentFrameIndex = 0;
}

Game.prototype.setup = function() {
  for (var i = 0; i < 14; i++) {
    this.frames.push(new Frame(this, i));
  }
}

Game.prototype.roll = function(roll) {
  this.currentFrame = this.frames[this.currentFrameIndex];

  this.currentFrame.addRoll(roll);
  this.currentFrame.rollIndex++;
  if (this.currentFrame.calculateFrameScore() == 10 || this.currentFrame.rollIndex == 2) {
    this.currentFrameIndex++;
  }
  return this.calculateScore();
};

Game.prototype.calculateScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    if (frame.frameIndex > 9) {
    } else {
      total += frame.calculateFrameScore();
    }
  });
  return total;
};

function Frame(game, frameIndex) {
  this.game = game;
  this.frameIndex = frameIndex;
  this.frameRolls = [0, 0];
  this.rollIndex = 0;
}

Frame.prototype.addRoll = function(roll) {
  this.frameRolls[this.rollIndex] = roll;
}

Frame.prototype.calculateFrameScore = function() {
  if (this.frameRolls[0] == 10) {
    return this.frameRolls[0] + this.getNextFrame(this).frameRolls[0] + this.getNextFrame(this).frameRolls[1] + this.getNextNextFrame(this).frameRolls[0];
  } else if (this.frameRolls[0] + this.frameRolls[1] == 10) {
    return this.frameRolls[0] + this.frameRolls[1] + this.getNextFrame(this).frameRolls[0];
  } else {
    return this.frameRolls[0] + this.frameRolls[1];
  }
}

Frame.prototype.getNextFrame = function(frame) {
  return this.game.frames[this.frameIndex + 1];
}

Frame.prototype.getNextNextFrame = function(frame) {
  return this.game.frames[this.frameIndex + 2];
}
