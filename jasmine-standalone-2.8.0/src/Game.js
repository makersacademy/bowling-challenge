'use strict';

function Game() {
  this.score = 0;
  this.frameNumber = 1;
  this.currentFrame = new Frame();
  this.frames = [this.currentFrame];
};

Game.prototype.bowl = function(num) {
  this.currentFrame.bowl(num);
  this.score += num;
  this.manageFrame()
};

Game.prototype.manageFrame = function() {
  if (this.currentFrame.isFrameOver === true) {
    this.addBonus();
    this.createNewFrame();
  };
};

Game.prototype.createNewFrame = function() {
  this.frameNumber ++;
  this.currentFrame = this.frameNumber == 10 ? new Frame(true) : new Frame();
  this.frames.push(this.currentFrame);
  this.setPreviousFrames();
}

Game.prototype.addBonus = function() {
  this.addStrikeBonus();
  this.addSpareBonus();
}

Game.prototype.addStrikeBonus = function() {
  if (this.lastFrame && this.lastFrame.isStrike) {
    this.strikeBonus()
    this.consecutiveStrikesBonus()
  }
}

Game.prototype.addSpareBonus = function() {
  if (this.lastFrame && this.lastFrame.isSpare) {
    this.lastFrame.score += this.currentFrame.rollOneScore;
    this.score += this.currentFrame.rollOneScore;
  }
}

Game.prototype.consecutiveStrikesBonus = function() {
  if (this.frameBeforeLast && this.frameBeforeLast.isStrike) {
    this.frameBeforeLast.score += this.currentFrame.rollOneScore;
    this.score += this.currentFrame.rollOneScore;
  }
}

Game.prototype.setPreviousFrames = function() {
  this.lastFrame = this.frames[this.frames.indexOf(this.currentFrame) - 1];
  if (this.frameNumber > 2) {
    this.frameBeforeLast = this.frames[this.frames.indexOf(this.currentFrame) - 2];
  }
}

Game.prototype.strikeBonus = function() {
  var bonus = this.currentFrame.rollOneScore + this.currentFrame.rollTwoScore
  this.lastFrame.score += bonus;
  this.score += bonus;
}
