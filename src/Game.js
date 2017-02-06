'use strict';

function Game() {
  this._frame = [];
  this._currentGo = [];
  this._currentScore = 0;
  this._nextGo = [];
  this._nextScore = 0;
  this.frameScore = 0;
  this.PINS = 10;
  this.BONUS = 10;
  this._strike = false;
  this._spare = false;

}
  Game.prototype.frameNumber = function () {
    if (this._frame.length > 8) {
      this.lastFrame();
    };
  };

  Game.prototype.bowl = function(ball1, ball2) {
      this.frameNumber();

      this._currentGo = [ball1, ball2];
      this._frame.push([ball1, ball2]);
      // this._frame.push([ball1, ball2]);
  };

  Game.prototype.currentScore = function() {
    this._currentScore = this._currentGo.reduce((a,b) => a + b, 0);
  };

  Game.prototype.strike = function() {
    this.currentScore();
        if (this._currentGo[0] == 10){
           console.log((this.BONUS * 2) + this._currentScore);
           console.log(this._currentScore);
           this._spare = false;
        } else if (this._currentScore == 10) {
          console.log(this.BONUS + this._currentScore);
          this._strike = false;
          this._spare = true;
        }
      };

  Game.prototype.spare = function() {
    this.currentScore();
      if (this._nextGo[0] == 10){
            console.log(this.BONUS + this._currentScore);
            console.log(this._currentScore);
            this._spare = false;
            this._strike = true;
          } else if (this._currentScore == 10) {
             console.log(this.BONUS + this._currentGo[0]);
             this._strike = false;
           } else {
             console.log(this.BONUS + this._currentGo);
               this._spare = false
           }
         };

  Game.prototype.open = function() {
    console.log(this._currentScore);
    return this._currentScore;
  };

  Game.prototype.lastFrame = function(ball1, ball2, ball3) {
    this._currentGo = [ball1, ball2, ball3];
    this._frame.push([ball1, ball2, ball3]);
  };

  Game.prototype.playerScore = function() {
          this.currentScore();
      if (this._currentGo[0] == 10) {
          this._strike = true;
          this.strike();
      } else if (this._currentScore == 10) {
          this._spare = true;
          this.spare();
      } else {
        this.open();
      }
      this._currentGo = [];
      this._currentScore = 0;
    };
