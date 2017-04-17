function Game() {
  "use strict";
  this.frameBall = 1;
  this.pinsStanding = 10;
  this.logPinsHit = [];
  this.logPinsHitIndex = 0;
  this.calcScore = 0;
}

function isStrike(firstBowl) {
  return (firstBowl === 10);
}

function isSpare(firstBowl, secondBowl) {
  return (firstBowl + secondBowl === 10);
}

Game.prototype.bowl = function(pins) {
  if (pins > this.pinsStanding) {
    throw "There are only " + this.pinsStanding + " pins standing!";
  }
  this.updatePinsStanding(pins);
  this.logPinsHit.push(pins);
  this.updateFrame();
};

Game.prototype.updateFrame = function() {
  if ((this.frameBall === 1) && (this.pinsStanding !== 0)) {
    this.frameBall = 2;
  } else {
    this.frameBall = 1;
    this.resetPins();
  }
};

Game.prototype.updatePinsStanding = function(pins) {
    this.pinsStanding -= pins;
};

Game.prototype.resetPins = function() {
  this.pinsStanding = 10
}

Game.prototype.standardScore = function(firstBowl, secondBowl) {
  this.calcScore += (firstBowl + secondBowl);
  this.logPinsHitIndex += 2;
};

Game.prototype.bonusScore = function(firstBowl, secondBowl, thirdBowl) {
  this.calcScore += (firstBowl + secondBowl + thirdBowl);
  if (isStrike(firstBowl)) {
    this.logPinsHitIndex += 1;
  } else {
    this.logPinsHitIndex += 2;
  }
};

Game.prototype.finalScore = function() {
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    var firstBowl = this.logPinsHit[this.logPinsHitIndex];
    var secondBowl = this.logPinsHit[this.logPinsHitIndex + 1];
    var thirdBowl = this.logPinsHit[this.logPinsHitIndex + 2]; 
    if ((isStrike(firstBowl)) || (isSpare(firstBowl, secondBowl))) {
      this.bonusScore(firstBowl, secondBowl, thirdBowl);  
    } else {
      this.standardScore(firstBowl, secondBowl);
    }
  }
  return this.calcScore;
};