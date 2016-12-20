function Score(game) {
  this.currentScore = 0;
  this.game = game;
  this.pins = game.pins;
  this.strike = false;
  this.spare = false;
}

Score.prototype.calculateScore = function(firstRoll,secondRoll) {
  if (this.spare == true) {
      this.currentScore += bonus + firstRoll
      this.spare == false
  } else if (this.strike == true) {
    this.currentScore += bonus + firstRoll + secondRoll
    this.strike = false
  }
  return this.currentScore += firstRoll + secondRoll
}

const bonus = 10;
