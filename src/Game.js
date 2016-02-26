'use strict';

function Game() {
  this.bowlHistory = [];
  this.frames = [];
  this.score = 0;
  this.FRAMES_LIMIT = 10;
  this.pinsStanding = 10;
};

Game.prototype.bowl = function(hits) {
  if (this.isGameOver()) throw new Error("Ten frames have been played, the game is over");
  if (hits > this.pinsStanding) throw new Error("Incorrect score");

  if (this.isFinalFrame()) {
    this._finalFrameScoring(hits)
  } else {
    this.bowlHistory.push(hits)
    this.currentFrame().pinsHit(hits);
    this.score += hits;
    this.pinsStanding -= hits;
    if (this.lastFrame().isOver()) { this._resetPins() }
  };
};

Game.prototype._finalFrameScoring = function(hits) {
  var finalFrame = this.currentFrame();
  if (!finalFrame.isStrike() && !finalFrame.isSpare()) {
    this.score += hits;
  }

  if (hits === this.pinsStanding) {
    this.pinsStanding -= hits;
    this._resetPins()
  } else {
  this.pinsStanding -= hits;
  };
  finalFrame.pinsHit(hits)
  this.bowlHistory.push(hits)
};

Game.prototype.currentFrame = function() {
  if (this.framesPlayed() === this.FRAMES_LIMIT) {
    return this.lastFrame();
  } else if ((this.framesPlayed() === 0) || this.lastFrame().isOver()) {
    this.frames.push(new Frame());
    return this.lastFrame();
  } else {
    return this.frames[this.framesPlayed()-1];
  };
};

Game.prototype.framesPlayed = function() {
  return this.frames.length;
};

Game.prototype.lastFrame = function() {
  return this.frames[this.framesPlayed()-1]
};

Game.prototype.isGameOver = function() {
  return (this.framesPlayed() === this.FRAMES_LIMIT && this.lastFrame().isFinalFrameOver())
};

Game.prototype.currentScore = function() {
  return this.score + (this.strikeBonus() + this.spareBonus());
};

Game.prototype.isFinalFrame = function() {
  return (this.framesPlayed() === this.FRAMES_LIMIT);
};

Game.prototype.strikeBonus = function() {
  var total = 0
  for (var i = 0; i < this.bowlHistory.length-2; i++) {
    if (this.bowlHistory[i] === this.FRAMES_LIMIT) {
      total += this.bowlHistory[i+1];
      total += this.bowlHistory[i+2];
    }
  };
  return total;
};

Game.prototype.spareBonus = function() {
  var total = 0
  for (var i = 0; i < this.framesPlayed(); i++) {
    if (this.frames[i].isSpare() && i === this.FRAMES_LIMIT-1) {
      total += this.frames[i].rolls[2];
    } else if (this.frames[i].isSpare()) {
      total += this.frames[i+1].rolls[0];
    }
  };
  return total;
};

Game.prototype._resetPins = function() {
  this.pinsStanding = 10;
};
