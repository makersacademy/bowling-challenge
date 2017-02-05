'use strict';

function Game() {
  this._frame = [];
  this._currentGo = [];
  this._currentScore = 0;
  this.frameScore = 0;
  this.PINS = 10;
  this.BONUS = 10;

}

  Game.prototype.bowl = function(ball1, ball2) {
    if (this._frame.length < 8) {
      this._currentGo = [ball1, ball2];
      this._frame.push([ball1, ball2]);
    } else {
      console.log('last frame');
      this.lastFrame();
    };
  };

  Game.prototype.strike = function() {
    if (this._currentGo[0] == 10) {
      return this.BONUS;
    };
  };

  Game.prototype.spare = function() {
    if (this._currentGo[0] + this._currentGo[1] == 10) {
      return this.BONUS;
    };
  };

  Game.prototype.open = function() {
    console.log(this._currentScore);
    return this._currentScore;
  };

  Game.prototype.playerScore = function() {
    this._currentScore = this._currentGo.reduce((a,b,c) => a + b, 0);
    this.frameScore += this._currentScore;
    console.log(this.frameScore);
  };

  Game.prototype.lastFrame = function(ball1, ball2, ball3) {
    this._currentGo = [ball1, ball2, ball3];
    this._frame.push([ball1, ball2, ball3]);
  };
