'use strict';

function Game() {
  this._frame = [];
  this._currentGo = [];
  this._currentScore = 0;
  this._bonusAward = false;
  this.frameScore = [];
  this.PINS = 10;
  this.BONUS = 10;
  this._strike = false;
  this._spare = false;
  this._tally = 0;
  this.score = 0;
}
  Game.prototype.frameNumber = function () {
    if (this.frameScore.length == 8) {
      this.lastFrame();
    };
  };

  Game.prototype.bowl = function(ball1, ball2) {
      this.frameNumber();
      this._currentGo = [ball1, ball2];
      this._frame.push([ball1, ball2]);
      this.currentScore();
      this.playerScore();
  };

  Game.prototype.currentScore = function() {
    this._currentScore = this._currentGo.reduce((a,b) => a + b, 0);
  };

  Game.prototype.accumulator = function() {
    if (this.frameScore.slice(-1)[0] !=  this.frameScore.NaN) {
    this._tally = this.frameScore.slice(-1)[0];
  } else {
      this.score;
  }
  };

  Game.prototype.strike = function() {
        if (this._currentGo[0] == 10){
           this.score = this.BONUS * 2 + this._currentScore;
        } else {
          this.score = this.BONUS + this._currentScore;
        };
      };


  Game.prototype.spare = function() {
              this.score = this.BONUS + this._currentGo[0];

        };

  Game.prototype.open = function() {
    this.score = this._currentScore;
    this._strike = false;
    this._spare = false;
  };

  Game.prototype.lastFrame = function(ball1, ball2, ball3) {
    this._currentGo = [ball1, ball2, ball3];
    this._frame.push([ball1, ball2, ball3]);
  };

  Game.prototype.bonusApply = function() {
    if (this._currentGo[0] == 10) {
      console.log(this._currentGo[0]);
      this._strike = true;
      this._spare = false;
    } else if (this._currentScore == 10) {
      console.log(this._currentScore);
      this._spare = true;
      this._strike = false;
    } else {
      this._spare = false;
      this._strike = false;
    }
  };


 Game.prototype.bonusAdjust = function() {
     this.accumulator();
   if (this._currentGo[0] == 10 && this._strike == false) {
    this.bonusApply();
  } else if (this._currentScore == 10 && this._currentGo[0] != 10 && this._spare == false) {
     this.bonusApply();
  }  else if (this._strike == true || this._spare == true){
    this.frameScore.push(this._tally += this.score);
    console.log(this.frameScore);
      if (this._currentScore != 10) {
          this.bonusApply();
          this.frameScore.push(this._tally + this._currentScore);
          console.log(this.frameScore);
        };
  } else {
    this.bonusApply();
    this.frameScore.push(this._tally += this.score);
  };
 };

  Game.prototype.playerScore = function() {
        if (this._strike == true && this._spare != true) {
          this.strike();
      } else if (this._spare == true && this._strike != true) {
          this.spare();
      } else if (this._currentScore < 10 && this._spare == false && this._strike == false) {
         this.open();
      };
      this.bonusAdjust();
    };
