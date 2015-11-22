function Game() {
  "use strict";
  this.pinsHit = [];
}

Game.prototype.bowl = function(pins) {
  this.pinsHit.push(pins);
};

Game.prototype.finalScore = function() {
  var calcScore = 0;
  var pinsHitIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
      (spareScore());
    } else {
      (standardScore());
    }
    pinsHitIndex += 2;
  }
  return calcScore;

  function isSpare() {
    return ((game.pinsHit[pinsHitIndex]) + (game.pinsHit[pinsHitIndex]) === 10);
  }

  function spareScore() {
    return calcScore += ((game.pinsHit[pinsHitIndex]) + (game.pinsHit[pinsHitIndex + 1])) + (game.pinsHit[pinsHitIndex + 2]);
  }

  function standardScore() {
    return calcScore += ((game.pinsHit[pinsHitIndex]) + (game.pinsHit[pinsHitIndex + 1]));
  }
};