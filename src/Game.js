'use strict';

function Game() {
  this._rack = [];
  this._currentScore = 0;
  this.frameScore = [];
  this.PINS = 10;
  this.BONUS = 10;
  this._tally = 0;
  this._spare = false;
  this._strike = false;
  this._double = false;
  this._turkey = false;
  this.count = 0;
}

  Game.prototype.bowl = function(ball) {
         this._rack.push(ball);
         this.currentScore();
         this.errorMessage();
    if (this.count == 9) {
      this.lastFrame();
  } else if (this._rack[0] == this.BONUS && this._rack.length == 1) {
        this.score();
        this.reRack();
        this.count ++
  } else if (this._rack.length == 2) {
        this.score();
        this.reRack();
        this.count ++
    };
  };

  Game.prototype.errorMessage = function() {
   if (this.count < 9 && this._currentScore > this.PINS) {
      this._rack.pop();
      throw new Error('Pin entry exceeded number of remaining pins. please re-enter score');
    };
  };

  Game.prototype.reRack = function() {
    this._rack = [];
  };


  Game.prototype.currentScore = function() {
    this._currentScore = this._rack.reduce((a,b) => a + b, 0);
  };

  Game.prototype.accumulator = function() {
    if (this.frameScore.slice(-1)[0] !=  this.frameScore.NaN) {
      this._tally = this.frameScore.slice(-1)[0];
    };
  };

  Game.prototype.score = function() {
    this.accumulator();
     if (this._rack[0] == this.PINS && this._spare == false) {
       this.strike();
        if (this._turkey == true)  {
              this.frameScore.push(this._tally += this.BONUS * 3);
              this.frameScore.push(this._tally += this.BONUS * 3);
              this._turkey = false;
              this._double = false;
        };
   } else if (this._currentScore == this.PINS && this._double == true) {
        this.frameScore.push(this._tally += this.BONUS * 3);
        this.frameScore.push(this._tally += this.BONUS * 2);
        this._double = false;
        this._strike = false;
        this._spare = true;
   } else if (this._currentScore != this.PINS && this._double == true) {
      this.frameScore.push(this._tally += this.BONUS * 3);
      this.frameScore.push(this._tally += (this.BONUS + this._currentScore));
      this.frameScore.push(this._tally += (this._currentScore));
      this._double = false;
      this._strike = false;
   } else if (this._currentScore == this.PINS && this._strike == true) {
        this.frameScore.push(this._tally += this.BONUS * 2);
        this._strike = false;
        this._spare = true;
   } else if ( this._currentScore == this.PINS && this._spare == false) {
      this.spare();
   } else if (this._rack[0] == this.PINS && this._spare == true) {
      this.frameScore.push(this._tally += this.BONUS * 2);
      this._spare = false;
      this._strike = true;
   } else if (this._currentScore == this.PINS && this._spare == true) {
      this.frameScore.push(this._tally += (this._rack[0] + this.BONUS));
   } else if (this._currentScore != this.PINS && this._spare == true) {
      this.frameScore.push(this._tally += (this._rack[0] + this.BONUS));
      this.frameScore.push(this._tally += this._currentScore);
      this._spare = false;
   } else {
      this.open();
      this.frameScore.push(this._tally += this._currentScore);
   }
  };

  Game.prototype.strike = function() {
      if (this._double == true && this._turkey == false) {
       this._turkey = true;
    } else if (this._strike == true && this._double == false) {
       this._double = true;
    } else {
       this._strike = true;
     };
   };

  Game.prototype.spare = function() {
      this._spare = true
      this._strike = false;
   };

  Game.prototype.open = function() {
      this._strike = false;
      this._spare = false;
   };

  Game.prototype.lastFrame = function() {
      if (this._rack[0] == this.PINS && this._rack.length == 1) {
        this.frameScore.push(this._tally += this.BONUS * 3);
    } else if (this._currentScore == this.PINS && this._rack.length == 2) {
          this.frameScore.push(this._tally += (this._rack[0] + this.BONUS));
    } else if (this._currentScore != this.PINS && this._rack.length == 2) {
          this.score();
          return 'End of frame';
    } else if (this._rack.length == 3) {
      this.frameScore.push(this._tally += this._currentScore);
      console.log('End of frame')
      return 'End of frame';
    }
  };

  Game.prototype.resetFrame = function() {
    this._rack = [];
    this._currentScore = 0;
    this.frameScore = [];
    this._tally = 0;
    this._spare = false;
    this._strike = false;
    this._double = false;
    this._turkey = false;
    this.count = 0;
  };
