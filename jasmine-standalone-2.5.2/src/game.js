'use strict';

  function Game() {
   this._currentGameScore = 0;
   this._currentFrameScore = 0;
   this._currentFrame = 1;
   this._currentBall = 1;
   this._previousFrames = [];
   this._index = this._currentFrame - 1
   this.ballOne = 0
   this.ballTwo = 0
  };

  Game.prototype.bowl = function(num) {
   if(this._currentBall === 1) {
     this.ballOne = num
   } else {
     this.ballTwo = num
   }
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
      return true;
    }
  };

  Game.prototype.spareCheck = function() {
    if(this._currentFrameScore === 10 && this._currentBall === 2) {
     return true;
    }
  };

  Game.prototype.calculateFrameScore = function () {
    this._reset();
  };

  Game.prototype._strikeCalulation = function () {
  };

  Game.prototype._gameOver = function () {
    if(this._previousFrames.length === 10) {
     this.calculateFinalScore();
     throw new Error('Game Over!')
    }
  };

  Game.prototype.calculateFinalScore = function () {
    return this._currentGameScore;
    this._gutterGame();
  };

  Game.prototype._gutterGame = function () {
    if(this._currentGameScore === 0) {
      return ('Bad luck, Gutter Game!');
    }
  };

  Game.prototype._reset = function () {
    this._currentGameScore += this._currentFrameScore;
    this._previousFrames.push([this.ballOne, this.ballTwo])
    this._currentFrameScore = 0;
    this._currentFrame += 1;
    this._currentBall = 1
    this._nextScoreBonus = 'none'
    this.ballOne = 0
    this.ballTwo = 0
  };
