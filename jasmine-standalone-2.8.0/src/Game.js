'use strict';

function Game() {
  this.score = 0;
  this.frameNumber = 1;
  this.currentFrame = new Frame();
  this.frames = [this.currentFrame];
};

Game.prototype.bowl = function(rollScore) {
  if (this.gameIsOver() || this.currentFrame.scoreIsImpossible(rollScore)) {
    return
  }
  this.currentFrame.bowl(rollScore);
  this.score += rollScore;
  this.manageFrame();
};

Game.prototype.manageFrame = function() {
  if (this.currentFrame.isFrameOver) {
    this.addBonus();
    if (this.frameNumber < 10) {
      this.createNewFrame();
    };
  };
};

Game.prototype.createNewFrame = function() {
  this.frameNumber++;
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

Game.prototype.gameIsOver = function() {
  if (this.frameNumber == 10 && this.currentFrame.isFrameOver) {
    return true
  } else {
    return false
  }
}

Game.prototype.displayScore = function() {
  return this.gameIsOver() ? "FINAL SCORE: " + this.score : "Score " + this.score;
}
