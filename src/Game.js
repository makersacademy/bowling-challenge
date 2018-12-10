'use strict';

function Game() {
  this.strike = false;
  this.firstStrike = false;
  this.secondStrike = false;
  this.spare = false;
};


//
Game.prototype.updateStrikeAndSpareVariables = function(frameScorer) {
  this.updateSpare(frameScorer)
  this.updateSecondStrike(frameScorer)
  this.updateFirstStrike(frameScorer)
};


// check true/false methods

Game.prototype.isStrikeTrue = function() {
  if(this.strike === true) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.isSpareTrue = function() {
  if(this.spare === true) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.isFirstStrikeTrue = function() {
  if(this.firstStrike === true) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.isSecondStrikeTrue = function() {
  if(this.secondStrike === true) {
    return true;
  } else {
    return false;
  }
};


// update variable methods

Game.prototype.updateStrike = function(frameScorer) {
  if(frameScorer.firstBowlScore === 10) {
    this.strike = true;
  } else {
    this.strike = false;
  }
};

Game.prototype.updateSpare = function(frameScorer) {
  if(frameScorer.totalPinsPerBowlArray.length === 20) {
    this.spare = false;
  } else if(frameScorer.firstBowlScore != 10 &&
    frameScorer.firstBowlScore + frameScorer.secondBowlScore === 10) {
    this.spare = true;
  } else {
    this.spare = false;
  }
};

Game.prototype.updateFirstStrike = function(frameScorer) {
  if(frameScorer.totalPinsPerBowlArray.length === 20 || frameScorer.totalPinsPerBowlArray.length === 19) {
    this.firstStrike = false;
  } else if(frameScorer.firstBowlScore === 10) {
    this.firstStrike = true;
  } else {
    this.firstStrike = false;
  }
};

Game.prototype.updateSecondStrike = function() {
  if(this.firstStrike === true && this.strike === true) {
    this.secondStrike = true;
  } else {
    this.secondStrike = false;
  }
};
