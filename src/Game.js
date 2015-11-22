function Game() {
  "use strict";
  this.logPinsHit = [];
  this.logPinsHitIndex = 0;
  this.calcScore = 0;
}

function isStrike(firstBowl) {
  return ((firstBowl) === 10);
}

function isSpare(firstBowl, secondBowl) {
  return ((firstBowl) + (secondBowl) === 10);
}

Game.prototype.bowl = function(pins) {
  this.logPinsHit.push(pins);
};

Game.prototype.standardScore = function(firstBowl, secondBowl) {
  this.calcScore += ((firstBowl) + (secondBowl));
  this.logPinsHitIndex += 2;
};

Game.prototype.bonusScore = function(firstBowl, secondBowl, thirdBowl) {
  this.calcScore += ((firstBowl) + (secondBowl) + (thirdBowl));
  if (isStrike(firstBowl)) {
    this.logPinsHitIndex += 1;
  } else {
    this.logPinsHitIndex += 2;
  }
};

Game.prototype.finalScore = function() {
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    var firstBowl = game.logPinsHit[game.logPinsHitIndex];
    var secondBowl = game.logPinsHit[game.logPinsHitIndex + 1];
    var thirdBowl = game.logPinsHit[game.logPinsHitIndex + 2]; 
    if ((isStrike(firstBowl)) || (isSpare(firstBowl, secondBowl))) {
      game.bonusScore(firstBowl, secondBowl, thirdBowl);  
    } else {
      game.standardScore(firstBowl, secondBowl);
    }
  }
  return this.calcScore;
};