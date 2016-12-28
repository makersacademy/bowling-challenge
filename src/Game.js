'use strict';

function Game() {
  this.frameCount = 0;
  this.firstScore = 0;
  this.secondScore = 0;
  this.rackedPins = false;
  this.sweepComplete = false;
  this.bonusCount = 0;
  this.bonusRollStatus = false;
  this.scoreboard = new Scoreboard();
}

  Game.prototype.increaseFrameCount = function() {
    if (this.frameCount < 10) {
      this.frameCount ++
      return this._rackUp();
    } else if (this.frameCount === 10){
      return this._bonusRoll()
    }
  };

  Game.prototype.firstRoll = function(){
    if (this.rackedPins === true) {
      this.firstScore = Math.floor(Math.random() * this.setUpPins.length);
      this._pinSweep(this.firstScore);
      return this.scoreboard.scoreFirstRoll(this.firstScore);
    } else {
      throw new Error("Cannot Roll, Pins are not yet racked!");
    }
  };

  Game.prototype.secondRoll = function(){
    if (this.sweepComplete === true) {
      this.secondScore = Math.floor(Math.random() * this.setUpPins.length);
      return this.scoreboard.scoreSecondRoll(this.secondScore);
  } else {
    throw new Error("Cannot Roll, Pins are not yet racked!");
  }
};

  Game.prototype._rackUp = function(){
    if (this.frameCount <= 10) {
      this.rackedPins = true
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10]
    }
  };

  Game.prototype._pinSweep = function(score){
    this.sweepComplete = true;
    if (this.bonusRollStatus === false) {
      return this.setUpPins.splice(this.setUpPins.length-score, score);
    } else {
      return this.setUpPins = [0];
    }
  };

  Game.prototype._bonusRoll = function(){
      this.bonusCount ++
    if (this._isStrike() && this.bonusCount <= 2){
      return this._rackUp();
    } else if (this._isSpare() && this.bonusCount <= 1){
      this.bonusRollStatus = true
      return this._rackUp();
    } else {
      throw new Error("Game Over! Please start a new game");
    }
  };


  Game.prototype._isStrike = function() {
    return this.firstScore === 10
  };

  Game.prototype._isSpare = function() {
    return this.firstScore + this.secondScore === 10
  };
