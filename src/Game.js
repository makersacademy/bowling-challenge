'use strict';

function Game() {
  this.frameCount = 0;
  this.currentScore = [];
  this.score = [];
  this.rackedPins = false;
  this.bonusRoll = false;
  this.scoreboard = new Scoreboard();
};

  Game.prototype.increaseFrameCount = function() {
    this.frameCount ++
    if (this.frameCount <= 10) {
      return this.rackUp();
    };
  };

  Game.prototype.rackUp = function(){
    if (this.frameCount <= 10) {
      this.rackedPins = true;
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
    } else {
      throw new Error("Game Over! Please start a new game");
    };
  };

  Game.prototype.firstRoll = function(){
    if (this.rackedPins == true) {
      var score1 = Math.floor(Math.random() * this.setUpPins.length);
      this._pinSweep(score1);
      return this.scoreboard.scoreFirstRoll(score1);
    } else {
      throw new Error("Cannot Roll, Pins are not yet racked!");
    };
  };

  Game.prototype._pinSweep = function(score){
    if (this.frameCount < 10) {
      this.sweepComplete = true;
      return this.setUpPins.splice(this.setUpPins.length-score, score);
    };

  };

  Game.prototype.secondRoll = function(){
    if (this.sweepComplete === true) {
      var score2 = Math.floor(Math.random() * this.setUpPins.length);
      return this.scoreboard.scoreSecondRoll(score2);
    };
  };

  // Game.prototype.bonusThirdRoll = function() {
  //   // if (this.frameCount === 10 && this.secondRoll() === 10 ) {
  //     this.bonusRoll = true;
  //     return this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
  //   // };
  // };
  //
  // Game.prototype.thirdRoll = function() {
  //   if(this.bonusRoll === true) {
  //     var score3 = Math.floor(Math.random() * this.setUpPins.length);
  //     return this.scoreboard.scoreThirdRoll(score3);
  //   }
  // };

  // Game.prototype._possibleBonusThrows = function(){
  //   this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10]
  //   this.rackedPins = true;
  // };
