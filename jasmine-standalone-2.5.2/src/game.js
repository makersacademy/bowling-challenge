'use strict';

function Game() {
 this._currentGameScore = 0;
 this._currentFrameScore = 0;
 this._currentFrame = 1;
 this._currentBall = 1;
 this._strike = false;
 this._space = false;
};

Game.prototype.bowl = function(num) {
  this._gameOver()
 this._currentFrameScore += num
   if(this.strikeCheck() === true) {
     this.calculateFrameScore();
   } else if(this.spareCheck() === true) {
     this.calculateFrameScore();
   } else if(this._currentBall === 2) {
     this.calculateFrameScore();
   } else {
   this._currentBall = 2;
  }
 };

Game.prototype.strikeCheck = function() {
  if(this._currentFrameScore === 10 && this._currentBall === 1) {
     this._strike = true;
    return true;
  }
};

Game.prototype.spareCheck = function() {
  if(this._currentFrameScore === 10 && this._currentBall === 2) {
    this._spare = true;
    return true;
  }
};

Game.prototype.calculateFrameScore = function () {
  this._currentGameScore += this._currentFrameScore;
  this._currentFrameScore = 0;
  this._currentFrame += 1;
};

Game.prototype._gameOver = function () {
  if(this._currentFrame === 10) {
   throw new Error('Game Over!')
  }
};
