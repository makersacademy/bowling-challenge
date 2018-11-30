'use strict';

function Scorer() {
  this.total = 0;
  this.firstBowlScore = 0;
  this.secondBowlScore = 0;
  this.firstStrike = false;
  this.secondStrike = false;
  this.spare = false;
};

Scorer.prototype.firstBowl = function(amount) {
 this.total += amount;
 this.firstBowlScore = amount;
 this.isStrike();
 this.isSecondStrike();
};

Scorer.prototype.secondBowl = function(amount) {
 this.total += amount;
 this.secondBowlScore = amount;
 this.isSpare();
};

Scorer.prototype.firstBowl()

Scorer.prototype.isStrike = function() {
  if(this.firstBowlScore === 10) {
    this.firstStrike = true;
  } else {
    this.firstStrike = false;
  }
};

Scorer.prototype.isSecondStrike = function() {
  if(this.firstStrike = true) {
    this.secondStrike = true;
  } else {
    this.secondStrike = false;
  }
};

Scorer.prototype.isSpare = function() {
  if(this.firstBowlScore != 10 && this.firstBowlScore + this.secondBowlScore === 10) {
    this.spare = true;
  } else {
    this.spare = false;
  }
};
