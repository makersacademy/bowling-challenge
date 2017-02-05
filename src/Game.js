'use strict';

function Game() {
  this._frame = [];
  this._currentGo = [];
  this._currentScore = 0;
  this.frameScore = 0;
  this.PINS = 10;

}

  Game.prototype.bowl = function(ball1, ball2) {
    this._currentGo = [ball1, ball2];
    this._frame.push([ball1, ball2]);
    this._currentScore = this._currentGo.reduce((a,b) => a + b, 0);
  };

  Game.prototype.strike = function() {
    if (this._currentGo[0] == 10) {
      console.log(this._currentScore);
      return this._currentScore;
    };
  };

  Game.prototype.spare = function() {
    if (this._currentGo[0] + this._currentGo[1] == 10) {
      console.log(this._currentScore);
      return this._currentScore;
    };
  };

  Game.prototype.open = function() {
    console.log(this._currentScore);
    return this._currentScore;
  };

  Game.prototype.playerScore = function() {
    this.frameScore += this._currentScore;
    console.log(this.frameScore);
  };
