'use strict';

  function Game() {
   this._currentGameScore = 0;
   this._currentFrameScore = 0;
   this._currentFrame = 1;
   this._currentBall = 1;
   this._index = 0
   this.ballOne = 0
   this.ballTwo = 0
   this._previousFrames = [];
   this._index = this._currentFrame
  };

  Game.prototype.bowl = function(num) {
   this._gameOver()
   if(this._currentBall === 1) {
     this.ballOne = num
   } else {
     this.ballTwo = num
   }
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

   Game.prototype.calculateFrameScore = function () {
     if(this._previousFrames.length === 0 ) {
     this._reset();
   } else if(this._previousFrames[0][0] === 10) {
     this.strikeCalculation();
   } else {
     this._reset();
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

  Game.prototype.strikeCalculation = function () {
    if(this._previousFrames[0][0] !== 10) {
      this._currentGameScore += this._previousFrames[0][0]
      this._reset();
    }
  };

  Game.prototype._gameOver = function () {
    if(this._previousFrames.length === 10) {
     this.calculateFinalScore();
     throw new Error('Game Over!')
    }
  };

  Game.prototype.calculateFinalScore = function () {
    this._gutterGame();
    return this._currentGameScore;
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
    this._index += 1;
    this._currentBall = 1;
    this.ballOne = 0;
    this.ballTwo = 0;
  };
