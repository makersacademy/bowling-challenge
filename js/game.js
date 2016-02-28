
function Game() {
  this.rolls = [];
  this.currentRoll = 0;
}

Game.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function () {

  var score = 0;
  var tenth = this.endGame();
  var toScore = (tenth) ? tenth + 1 : this.rolls.length;

  for (i = 0; i < toScore; i += 1) {
    if (this.isStrike(i)) {
      score += 10 + this.rolls[i + 1] + this.rolls[i + 2];
    } else if (this.isSpare(i)) {
      score += 10 + this.rolls[i + 2];
      i += 1;
    } else {
      score += this.rolls[i];
    }
  }

  return score;

};

Game.prototype.isSpare = function (roll) {
  spare = this.rolls[roll] + this.rolls[roll + 1] === 10 ? true : false;
  return spare;
};

Game.prototype.isStrike = function (roll) {
  strike = this.rolls[roll] === 10 ? true : false;
  return strike;
};

Game.prototype.endGame = function () {
  var bonus = false;
  var check = this.rolls.length - 3;
  if (this.isStrike(check) || this.isSpare(check)) {
    bonus = true;
  }

  bonusRolls = (bonus) ? check : null;
  return bonusRolls;
};
