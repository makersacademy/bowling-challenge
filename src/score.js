function Score(game) {
  this.currentScore = 0;
  this.game = game;
  this.pins = game.pins;
  this.strike = false;
  this.strikes = 0;
  this.spare = false;
}

Score.prototype.calculateScore = function(firstRoll,secondRoll) {
  return this.currentScore += firstRoll + secondRoll
}

Score.prototype.bonusForSpare = function(firstRoll) {
  if (this.spare == true) {
      this.currentScore += bonus + firstRoll
      this.spare = false
  }
}

Score.prototype.bonusForStrike = function(firstRoll,secondRoll) {
  if(this.strike == true) {

    if (this.strikes >= 3) {
      this.threeOrMoreStrikesInARow(this.strikes,firstRoll,secondRoll);
    } else if (this.strikes == 2) {
      this.twoStrikesInARow(firstRoll,secondRoll);
    } else {
    this.singleStrikeBonus(firstRoll,secondRoll);
    }
      this.strike = false;
      this.strikes = 0;
  }
}

Score.prototype.threeOrMoreStrikesInARow = function(strikes,firstRoll,secondRoll) {
  this.currentScore += ((strikes-2)*30)
  this.twoStrikesInARow(firstRoll,secondRoll);
}

Score.prototype.twoStrikesInARow = function(firstRoll,secondRoll) {
  this.currentScore += 2*bonus + firstRoll;
  this.singleStrikeBonus(firstRoll,secondRoll);

}

Score.prototype.singleStrikeBonus = function(firstRoll,secondRoll) {
  this.currentScore += bonus + firstRoll + secondRoll;
}

const bonus = 10;
