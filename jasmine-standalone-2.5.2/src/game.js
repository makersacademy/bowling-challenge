'use strict';

  function Game() {
   this._currentGameScore = 0;
   this._currentFrameScore = 0;
   this._currentFrame = 1;
   this._currentBall = 1;
   this._previousFrames = [];
   this._nextScoreBonus = 'none'
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
       this._nextScoreBonus = 'strike'
      return true;
    }
  };

  Game.prototype.spareCheck = function() {
    if(this._currentFrameScore === 10 && this._currentBall === 2) {
      this._nextScoreBonus = 'spare'
     return true;
    }
  };

  Game.prototype.calculateFrameScore = function () {
    this._currentGameScore += this._currentFrameScore;
    this._previousFrames.push([this._currentFrameScore, this._nextScoreBonus])
    this._reset();
  };

  Game.prototype._gameOver = function () {
    if(this._currentFrame === 10) {
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
    this._currentFrameScore = 0;
    this._currentFrame += 1;
    this._currentBall = 1
    this._nextScoreBonus = 'none'
  };
