'use strict';

function Game() {
  this._frame = [];
  this._currentGo = [];
  this._currentScore = 0;
  this._bonusAward = false;
  this._strikeBonus = false;
  this._spareBonus = false;
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
      this.playerScore();
      this.frameScore.push(this.score);
      // this.frameScore.shift();
      this._tally = this.frameScore.slice(-1)[0];
      console.log(this._tally);
      // this._frame.push([ball1, ball2]);
  };

  // Game.prototype.tally = function() {
  //   this._tally = 0;
  //   for (var i = 0; i < this.frameScore.length; i++) {
  //     this._tally += this.frameScore[i];
  //   }
  //   return this._tally;
  // }

  Game.prototype.currentScore = function() {
    this._currentScore = this._currentGo.reduce((a,b) => a + b, 0);
  };

  Game.prototype.strike = function() {
    this.currentScore();
        if (this._currentGo[0] == 10){
           this.score = this.BONUS * 2 + this._currentScore;
        } else if (this._currentScore == 10) {
          this.score = this.BONUS + this._currentScore;
        } else {
          this.score = this.BONUS + this._currentScore;
        };
          this._strike = false;
          this._bonusAward = false;
      };

  Game.prototype.spare = function() {
    this.currentScore();
      if (this._currentGo[0] == 10){
            this.score = this.BONUS + this._currentScore;
            this.score = this._currentScore;
          } else if (this._currentScore == 10) {
             this.score = this.BONUS + this._currentGo[0];
           } else {
             this.score = this.BONUS + this._currentGo[0];
           };
            this._spare = false
           this._bonusAward = false;
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
      this._strike = true;
      this._spare = false;
    } else if (this._currentScore == 10) {
      this._spare = true;
      this._strike = false;
    } else {
      this._spare = false;
      this._strike = false;
    }
  };

 Game.prototype.bonusAward = function() {
   if (this._currentGo[0] == 10) {
     this._strikeBonus = true;
     this._spareBonus = false;
   } else if (this._currentScore == 10) {
     this._spareBonus = true;
     this._strikeBonus = false;
   } else {
     this._spareBonus = false;
     this._strikeBonus = false;
   }
 }

  Game.prototype.playerScore = function() {
          this.currentScore();
        if (this._strikeBonus == true && this._spare != true) {
          this.strike();
      } else if (this._spareBonus == true && this._strike != true) {
          this.spare();
      } else if (this._currentScore < 10 && this._spare == false && this._strike == false) {
         this.open();
      }

        this.bonusApply();
        this.bonusAward();

      // this._previousGo = this._currentGo;
      // this._previousScore = this._currentScore;
    };
