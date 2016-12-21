'use strict';

function Game() {
  // this.PINS = [0,1,2,3,4,5,6,7,8,9,10];
  // this.setUpPins = [];
  this.frameCount = 0;
  this.currentScore = [];
  this.score = [];
  this.rackedPins = false;
  this.scoreboard = new Scoreboard();
};

  Game.prototype.rackUp = function(){
    this.frameCount ++
    if (this.frameCount <= 10) {
      console.log(this.rackedPins)
      this.rackedPins = true;
      console.log(this.rackedPins)
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10];
      console.log(this.setUpPins)
    } else {
      throw new Error("Game Over! Please start a new game");
    };
  };

  Game.prototype.firstRoll = function(){
    if (this.rackedPins == true) {
      console.log(this.setUpPins)
      var score = Math.floor(Math.random() * this.setUpPins.length);
      console.log(score)
      this.pinSweep(score);
      return this.scoreboard.scoreFirstRoll(score);
    } else {
      throw new Error("Cannot Roll, Pins are not yet racked!");
    };
  };

    // if (score === 10) {
    //   this.currentScore.push('X');
    //   this.pins == [0]
    //   return score
    // } else {
    //   this.currentScore.push(score);
    //   this.pins == [0]
    //   return score
    // };

    // this.currentScore.push(score);
    // return score;

  Game.prototype.pinSweep = function(score){
      this.sweepComplete = true;
      return this.setUpPins.splice(this.setUpPins.length-score, score);

  };

  Game.prototype.secondRoll = function(){
    if (this.sweepComplete === true) {
      console.log(this.setUpPins)
      var score2 = Math.floor(Math.random() * this.setUpPins.length);
      console.log(score2)
      this.rackedPins = false;
      return this.scoreboard.scoreSecondRoll(score2);
    };
  };

  Game.prototype.currentRoundScore = function() {
    return this.scoreboard.calculateScore(this.currentScore);
  };

  Game.prototype.runningTotal = function() {
    return this.scoreboard.currentTotal();
  };

  Game.prototype.increaseFrameCount = function() {
    this.frameCount = this.scoreboard.increaseFrame();
    return this.frameCount;
  };

  Game.prototype.newGame = function(){
    new Game();
  };
