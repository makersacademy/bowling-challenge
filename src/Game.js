'use strict';

function Game() {
  this._frame = [];
  this._currentGo = [10,0];
  this.strike = 10;
  this._currentScore = 0;
  this.rollingScore = 0;
  this.frameScore = 0;
}

  Game.prototype.bowl = function(ball1, ball2) {
    this._currentGo = [ball1, ball2];
    this._frame.push([ball1, ball2]);
    this._currentScore = this._currentGo.reduce((a,b) => a + b, 0);
  };

  Game.prototype.strikeX = function() {
    if (this._currentGo[0] == 10) {
      return this.strike;
    };
  };

  Game.prototype.playerScore = function() {
    return this.frameScore;
  };
