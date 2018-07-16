'use strict';

function Game() {
  this.MAX_ROLLS = 2;
  this.MAX_FRAMES = 10;

  this._frames = [];
  this._rolls = 0;
  // this property records total pins hit in a Frame
  this._totalPinsHitFrame = 0;
  this._score = new Score();
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
}

Game.prototype.getFrames = function() {
  return this._frames.length;
};

Game.prototype.roll = function(kockedDownPins) {
  // first check the status of the game
  if (this.gameOver() === false) {
    if (this._rolls === 0) {
      this._score.storeRollScore(kockedDownPins);
      this._totalPinsHitFrame += kockedDownPins;
      this._rolls += 1;
      this.getBonus();
      this.checkStrike(kockedDownPins);
      return "roll again"
    } else {
      this._score.storeRollScore(kockedDownPins);
      this._totalPinsHitFrame += kockedDownPins;
      this._rolls += 1; // 2 rolls
      this.getBonus();
      this.checkStrike(kockedDownPins);
      this._score.calculateScore(this._totalPinsHitFrame);
        if (this.getFrames() <= this.MAX_FRAMES && this.getRolls() === this.MAX_ROLLS) {
          this._frames.push('frame');
        };
      this.resetPinsCount(); // reset pins hit
      this.resetRollsCount(); // reset rolls count
    };
    return this._rolls;
  } else {
      return "Game over";
  };
};

Game.prototype.getBonus = function() {
   return this._score.checkBonus(this._score._rollScore.length);
};

Game.prototype.getScore = function() {
  return this._score.getScore();
};

Game.prototype.getScoreCard = function() {
  return this._score.getScoreScard();
};

Game.prototype.checkStrike = function(kockedDownPins) {
   if (kockedDownPins === 10) {
    return "Strike!";
  } else {
    return " ";
  };
};

Game.prototype.getRolls = function() {
  return this._rolls;
};

Game.prototype.resetPinsCount = function() {
  this._totalPinsHitFrame = 0;
};

Game.prototype.resetRollsCount = function() {
  this._rolls = 0;
};

Game.prototype.resetFrames = function() {
  this._frames = [];
};

Game.prototype.gameOver = function() {
  return this.getFrames() === this.MAX_FRAMES;
};

Game.prototype.resetGame = function() {
  this.resetFrames();
  this.resetRollsCount();
  this.resetPinsCount();
  this._score.resetScore();
};
