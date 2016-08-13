'use strict';

function Scoreboard () {
  this.frames = [];
  this.currentScore = 0;
  this.strikes = [];
  //this.calc = new Scoring();
};

Scoreboard.prototype.nextFrame = function () {
  this.frames.push({roll1: null, roll2: null});
};

Scoreboard.prototype.saveFirstRoll = function (hits) {
  this.frames[this.frames.length-1].roll1 = hits;
  if(hits == 10){
    this.registerStrike();
  }
};

Scoreboard.prototype.saveSecondRoll = function (hits) {
  if (this.frames.length === 0 || this.frames[this.frames.length-1].roll1 === null) {
    throw new Error('Bowl first');
  }
  this.currentFrame().roll2 = hits;
  this.calculateScore();
  this.nextFrame();
};

Scoreboard.prototype.calculateScore = function () {
  this.currentScore += (this.currentFrame().roll1 + this.currentFrame().roll2);
  this.calculateStrikeBonus();
};

Scoreboard.prototype.getCurrentScore = function () {
  return this.currentScore;
};

Scoreboard.prototype.currentFrame = function () {
  return this.frames[this.frames.length-1];
};

Scoreboard.prototype.registerStrike = function () {
  this.currentFrame().roll2 = 0;
  this.currentScore += 10;
  this.strikes.push(true);
  this.nextFrame();
};

Scoreboard.prototype.calculateStrikeBonus = function () {
  for (var i = this.strikes.length; i > 0; i--){
    this.currentScore += (i-1)*10;
    if(i == 1) {
      this.strikes = [];
      this.calculateScore();
    }
  }
};
