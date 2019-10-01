function Game() {
  this.allBowls = [];
}

Game.prototype.addBowl = function(pinsHit) {
  this.allBowls.push(pinsHit);
};

Game.prototype.calculateTotal = function() {
  var total = 0;
  var rollIndex = 0;
  var game = this;
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      addStrikeScore()
      rollIndex += 1
    } else if (isSpare()) {
      addSpareScore()
      rollIndex += 2
    } else {
      addNormalScore()
      rollIndex += 2
    }
  }
  return total;

  function isSpare() {
    return game.allBowls[rollIndex] + game.allBowls[rollIndex + 1] === 10;
  }

  function isStrike() {
    return game.allBowls[rollIndex] === 10;
  }

  function addSpareScore() {
    total += game.allBowls[rollIndex] || 0;
    total += game.allBowls[rollIndex + 1] || 0;
    total += game.allBowls[rollIndex + 2] || 0;
  }

  function addStrikeScore() {
    total += game.allBowls[rollIndex] || 0;
    total += game.allBowls[rollIndex + 1] || 0;
    total += game.allBowls[rollIndex + 2] || 0;
  }

  function addNormalScore() {
    total += game.allBowls[rollIndex] || 0;
    total += game.allBowls[rollIndex + 1] || 0;
  }
};
