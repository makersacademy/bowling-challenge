'use strict';

function Game() {
  this.scoreboard = [];
  this.totalScore = 0;
  this.pins = 10;
  this.frame = 0;
  this.roll = 0;
  this.pinsKnocked = 0;
}

Game.prototype.letsPlay = function() {
  if (this.frame === 0) {
    this.frame += 1;
    this.roll = 1;
    this.firstRound();
  } else if (this.frame === 1) {
    this.roll = 2;
    this.secondRound();
  }
  else {
  }
};

Game.prototype.firstRound = function() {
  this.rollBall();
  if (this.pinsKnocked < 10) {
      this.addScore();
      this.documentFirstRound();
  } else {

  }
}
Game.prototype.secondRound = function() {
  this.rollBall();
  this.addScore();
  this.documentSecondRound();
}

Game.prototype.rollBall = function() {
  this.pinsKnocked = Math.floor(Math.random() * this.pins);
  this.pins -= this.pinsKnocked
};


Game.prototype.addScore = function () {
  this.totalScore = this.totalScore + this.pinsKnocked
};

Game.prototype.documentFirstRound = function () {
  var obj = {};
  obj["Frame"] = this.frame;
  obj["Roll"] = this.roll;
  obj["Knocked down pins"] = this.pinsKnocked;
  this.scoreboard.push(obj);
}

Game.prototype.documentSecondRound = function () {
  var obj = {};
  obj["Frame"] = this.frame;
  obj["Roll"] = this.roll;
  obj["Knocked down pins"] = this.pinsKnocked;
  obj["Total Score"] = this.totalScore;
  this.scoreboard.push(obj);
}
