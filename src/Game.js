'use strict';

function Game() {
  this.frameCount = 0;
  this.currentScore = [];
  this.score = [];
  this.firstScore = 0;
  this.secondScore = 0;
  this.rackedPins = false;
  this.sweepComplete = false;
  this.bonusCount = 0;
  this.bonusRollStatus = false;
  this.bonusRackedPins = false;
  this.scoreboard = new Scoreboard();
};

  Game.prototype.increaseFrameCount = function() {
    if (this.frameCount < 10) {
      this.frameCount ++
      console.log("normal")
      return this._rackUp();
    } else if (this.frameCount === 10 && this.firstScore === 10 && this.bonusCount <= 1){
      console.log("strike")
      this.bonusCount ++
      return this._rackUp();
    } else if (this.frameCount === 10 && this.firstScore + this.secondScore === 10 && this.bonusCount <= 0){
      console.log("spare")
      this.bonusCount ++
      this.bonusRollStatus = true
      return this._rackUp();
    } else {
      throw new Error("Game Over! Please start a new game");
    };
  };

  Game.prototype._rackUp = function(){
    if (this.frameCount <= 10) {
      this.rackedPins = true;
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
    };
  };

  Game.prototype.firstRoll = function(){
    if (this.rackedPins == true) {
      this.firstScore = Math.floor(Math.random() * this.setUpPins.length);
      this._pinSweep(this.firstScore);
      this.rackedPins = false;
      return this.scoreboard.scoreFirstRoll(this.firstScore);
    } else {
      this.sweepComplete = false;
      throw new Error("Cannot Roll, Pins are not yet racked!");
    };
  };

  Game.prototype._pinSweep = function(score){
    if (this.bonusRollStatus == false) {
      console.log("normal")
      this.sweepComplete = true;
      return this.setUpPins.splice(this.setUpPins.length-score, score);
    } else {
      console.log("bonus")
      this.sweepComplete = true;
      return this.setUpPins = [0];
    };

  };

  Game.prototype.secondRoll = function(){
    if (this.sweepComplete == true) {
      this.secondScore = Math.floor(Math.random() * this.setUpPins.length);
      this.sweepComplete = false;
      return this.scoreboard.scoreSecondRoll(this.secondScore);
  } else {
    throw new Error("Cannot Roll, Pins are not yet racked!");
  };
  };

  // Game.prototype._bonusRack = function(){
  //   if (this.bonusRollStatus === true){
  //     this.bonusRackedPins = true;
  //     this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
  //     this.bonusRollStatus = false;
  //   }
  // };

  // Game.prototype.bonusRoll = function() {
  //   if (this.bonusRackedPins === true){
  //   this.firstScore = Math.floor(Math.random() * this.setUpPins.length);
  //   this.bonusRackedPins = false;
  //   this.bonusZero();
  //   return this.scoreboard.scoreFirstRoll(this.firstScore);
  // } else {
  //   throw new Error("Cannot Roll, Pins are not yet racked!");
  // };
  // };
  //
  // Game.prototype.bonusZero = function() {
  //   this.secondScore = 0;
  //   return this.scoreboard.scoreSecondRoll(this.secondScore);
  // };
