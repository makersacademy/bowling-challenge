'use strict';

function Scorer() {
  this.total = 0;
  this.strike = false;
  this.firstBowlScore = 0;
  this.secondBowlScore = 0;
  this.firstStrike = false;
  this.secondStrike = false;
  this.spare = false;
  this.frameScores = []
};



// update score methods
Scorer.prototype.scoreSpare = function() {
  if(this.spare === true) {
    this.total += this.firstBowlScore;
  }
};

Scorer.prototype.calculateFirstBowlScore = function () {
  if(this.firstSrike === true) {
    this.total += this.firstBowlScore;
  }
};

// check true/false methods
Scorer.prototype.isSpareTrue = function() {
  if this.spare === true {
    return true;
  } else {
    return false;
  }
}

Scorer.prototype.isFirstStrikeTrue = function() {
  if this.firstStrike === true {
    return true;
  } else {
    return false;
  }
}

Scorer.prototype.isSecondStrikeTrue = function() {
  if this.secondStrike === true {
    return true;
  } else {
    return false;
  }
}


// update variables methods
Scorer.prototype.updateFirstStrike = function() {
  if(this.firstBowlScore === 10) {
    this.strike = true;
  } else {
    this.strike = false;
  }
};


Scorer.prototype.isSecondStrike = function() {
  if(this.firstStrike = true) {
    this.secondStrike = true;
  } else {
    this.secondStrike = false;
  }
};

Scorer.prototype.firstBowl = function(amount) {
 this.firstBowlScore = amount;
};

Scorer.prototype.secondBowl = function(amount) {
 this.secondBowlScore = amount;
};

Scorer.prototype.updateFrameScores = function() {
 this.FrameScores.push([this.firstbowl, this.secondbowl])
};


Scorer.prototype.updateSpare = function() {
  if(this.firstBowlScore != 10 && this.firstBowlScore + this.secondBowlScore === 10) {
    this.spare = true;
  } else {
    this.spare = false;
  }
};
//
// Scorer.prototype.calculateSecondBowlScore = function() {
//
// };
