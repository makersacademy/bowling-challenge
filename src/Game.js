'use strict';

function Game() {
  this.frameCount = 0;
  this.currentScore = [];
  this.score = [];
  this.rackedPins = false;
  this.bonusRoll = false;
  this.scoreboard = new Scoreboard();
};

  Game.prototype.rackUp = function(){
    this.frameCount ++
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

  Game.prototype.bonusThirdRoll = function() {
    if (this.frameCount === 10 && this.secondRoll() === 10 ) {
      return this.bonusRoll = true;
    };
  };

  Game.prototype.thirdRoll = function() {
    if(this.bonusRoll === true) {
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
      var score = Math.floor(Math.random() * this.setUpPins.length);
      return this.scoreboard.scoreThirdRoll(score);
    }
  };
