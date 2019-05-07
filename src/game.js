function Game () {
  this.bowls = [];
  this.STARTING_SCORE = 0;
  this.bowlIndex = 0;
};

Game.prototype.bowl = function(pins) {
  this.bowls.push(pins);
};

Game.prototype.score = function() {
  var game = this;
  bowlIndex = this.bowlIndex;
  result = this.STARTING_SCORE;


  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrikeBonus()) {
      result += getStrikeBonusTotal();
      bowlIndex++;
    } else if (isSpareBonus()) {
      result += getSpareBonusTotal();
      bowlIndex += 2;
    } else {
      result += getNoBonusTotal();
      bowlIndex += 2;
    }
  }
  return result;

  function getNoBonusTotal() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1];
  }

  function isSpareBonus() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] == 10;
  }

  function isStrikeBonus() {
    return game.bowls[bowlIndex] == 10;
  }

  function getSpareBonusTotal() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] + game.bowls[bowlIndex + 2];
  }

  function getStrikeBonusTotal() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] + game.bowls[bowlIndex + 2];
  }

};
