'use strict';

function Scorer() {
  this.total = 0;
  this.strike = false;
  this.firstBowlScore = 0;
  this.secondBowlScore = 0;
  this.firstStrike = false;
  this.secondStrike = false;
  this.spare = false;
  this.frameScores = [];
  this.frameTotals = [];
};

// update score methods

Scorer.prototype.firstBowl = function(amount) {
 this.updateFirstBowlScore(amount)
 this.updateStrike()
 this.updateFrameScores(amount)
 this.calculateFirstBowlScore(amount)
};

Scorer.prototype.secondBowl = function(amount) {
 this.updateSecondBowlScore(amount)
 this.updateFrameScores(amount)
 this.calculateSecondBowlScore(amount)
 this.updateSpare()
 this.updateFirstStrike()
 this.updateSecondStrike()
 this.updateRunningFrameScore()
};

Scorer.prototype.calculateFirstBowlScore = function(amount) {
  this.updateTotalFirstBowl(amount)
};

Scorer.prototype.calculateSecondBowlScore = function(amount) {
  this.updateTotalSecondBowl(amount)
};

Scorer.prototype.updateTotalFirstBowl = function(amount) {
if(this.isFirstStrikeTrue()) {
  this.totalPlusAmount(amount)
  }
if(this.isSecondStrikeTrue()) {
  this.totalPlusAmount(amount)
  }
if(this.isSpareTrue()) {
  this.totalPlusAmount(amount)
  }
  this.totalPlusAmount(amount)
};

Scorer.prototype.updateTotalSecondBowl = function(amount) {
  if(this.isFirstStrikeTrue()) {
    this.totalPlusAmount(amount * 2)
    }
  this.totalPlusAmount(amount)
};

Scorer.prototype.totalPlusAmount = function(amount) {
  this.total += amount;
};

// // check true/false methods

Scorer.prototype.isStrikeTrue = function() {
  if(this.strike === true) {
    return true;
  } else {
    return false;
  }
};

Scorer.prototype.isSpareTrue = function() {
  if(this.spare === true) {
    return true;
  } else {
    return false;
  }
};

Scorer.prototype.isFirstStrikeTrue = function() {
  if(this.firstStrike === true) {
    return true;
  } else {
    return false;
  }
};

Scorer.prototype.isSecondStrikeTrue = function() {
  if(this.secondStrike === true) {
    return true;
  } else {
    return false;
  }
};


// // update variable methods

Scorer.prototype.updateStrike = function() {
  if(this.firstBowlScore === 10) {
    this.strike = true;
  } else {
    this.strike = false;
  }
};

Scorer.prototype.updateSpare = function() {
  if(this.firstBowlScore != 10 && this.firstBowlScore + this.secondBowlScore === 10) {
    this.spare = true;
  } else {
    this.spare = false;
  }
};

Scorer.prototype.updateFirstStrike = function() {
  if(this.firstBowlScore === 10) {
    this.firstStrike = true;
  } else {
    this.firstStrike = false;
  }
};

Scorer.prototype.updateSecondStrike = function() {
  if(this.firstStrike === true && this.strike === true) {
    this.secondStrike = true;
  } else {
    this.secondStrike = false;
  }
};

Scorer.prototype.updateFirstBowlScore = function(amount) {
  this.firstBowlScore = amount;
};

Scorer.prototype.updateSecondBowlScore = function(amount) {
  this.secondBowlScore = amount;
};

Scorer.prototype.updateFrameScores = function(amount) {
  this.frameScores.push(amount)
};

Scorer.prototype.updateRunningFrameScore = function() {
  if(!this.isStrikeTrue() && !this.isSpareTrue()) {
    var runningTotal = (this.total);
    this.frameTotals.push(runningTotal);
  } else {
    var runningTotal = (this.total - 10);
    this.frameTotals.push(runningTotal);
  }
};
