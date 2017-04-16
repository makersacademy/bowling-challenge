'use strict';

function Game() {
  this.frame = 1;
  this.roll = 1;
  this.pins = 10;
  this.pinsKnocked = 0;
  this.totalScore = 0;
  this.scoreboard = [];
  this.strike = 0;
  this.message = false;
}

const STRIKE = 10;

Game.prototype.letsPlay = function() {
  this.rollBall();
  if (this.roll === 1) {
    this.firstRound();
  } else if (this.roll === 2) {
    this.secondRound();
  }
  else {
  }
};

Game.prototype.firstRound = function() {
    this.addScore();
    this.messaging();
    this.documentFirstRound();
  if (this.pinsKnocked < 10) {
    this.roll = 2;
  } else if (this.pinsKnocked === STRIKE) {
    this.strike += 1;
    this.message = "Strike";
    this.documentStrike();
  } else {
  }
}

Game.prototype.messaging = function() {
  if (this.pinsKnocked < 4) {
    this.message = "Unlucky!"
  } else if (this.pinsKnocked > 4 && this.pinsKnocked < 8) {
    this.message = "You can do better than that!"
  } else if (this.pinsKnocked < 10) {
    this.message = "So close!" }
    else { this.message = "Strike"}
}
// Game.prototype.documentStrike = function() {
//   this.scoreboard.push([this.frame, this.roll, this.pinsKnocked, "X", this.message]
//   this.reset();
// }

Game.prototype.secondRound = function() {
  this.addScore();
  this.documentSecondRound();
  this.reset();
}

Game.prototype.documentStrike = function() {
  this.scoreboard.push([this.frame, this.roll, this.totalScore, this.message])
};

Game.prototype.rollBall = function() {
  // this.pinsKnocked = Math.floor(Math.random() * this.pins);
  this.pinsKnocked = 10;
  this.pins -= this.pinsKnocked
};

Game.prototype.addScore = function () {
  if (this.pinsKnocked !== 10) {
    this.totalScore += this.pinsKnocked * this.strike
    this.strike = 0;
  } else
  this.totalScore += this.pinsKnocked
};

// Game.prototype.strikeScore = function() {
//   this.strikePoints = this.pinsKnocked
// }

Game.prototype.reset = function () {
  this.frame += 1;
  this.roll = 1;
  this.pins = 10;
  this.pinsKnocked = 0;
}

Game.prototype.documentFirstRound = function () {
  this.scoreboard.push([this.frame, this.roll, this.pinsKnocked, this.message])
}

Game.prototype.documentSecondRound = function () {
  this.scoreboard.push([this.frame, this.roll, this.pinsKnocked, this.totalScore, this.message])
}
