'use strict';

function Game() {
  this.frameCount = 0;
  this.currentScore = [];
  this.score = [];
  this.rackedPins = false;
  this.scoreboard = new Scoreboard();
};

  Game.prototype.rackUp = function(){
    this.frameCount ++
    this.scoreboard.refreshCurrentScores();
    if (this.frameCount <= 10) {
      this.rackedPins = true;
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
    } else {
      throw new Error("Game Over! Please start a new game");
    };
  };

  Game.prototype.firstRoll = function(){
    if (this.rackedPins == true) {
      var score = Math.floor(Math.random() * this.setUpPins.length);
      this.pinSweep(score);
      return this.scoreboard.scoreFirstRoll(score);
    } else {
      throw new Error("Cannot Roll, Pins are not yet racked!");
    };
  };

  Game.prototype.pinSweep = function(score){
      this.sweepComplete = true;
      return this.setUpPins.splice(this.setUpPins.length-score, score);

  };

  Game.prototype.secondRoll = function(){
    if (this.sweepComplete === true) {
      var score2 = Math.floor(Math.random() * this.setUpPins.length);
      return this.scoreboard.scoreSecondRoll(score2);
    };
  };

  Game.prototype.thirdRoll = function() {
    if (this.frameCount === 10 && this.secondRoll() === 10 ) {
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
      var score = Math.floor(Math.random() * this.setUpPins.length);
      return this.scoreboard.scoreThirdRoll(score);
    };
  };

  // Game.prototype.currentRoundScore = function() {
  //   return this.scoreboard.calculateScore(this.currentScore);
  // };
  //
  // Game.prototype.runningTotal = function() {
  //   return this.scoreboard.currentTotal();
  // };
