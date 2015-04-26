function Score() {
  this.rolls = [new Roll(), new Roll()];
}

Score.prototype.isNormal = function(first_argument) {
 return (this.rolls[0].pinsknockedtotal + this.rolls[1].pinsknockedtotal);
};

Score.prototype.isSpare = function() {
  return (this.rolls[0].pinsknockedtotal + this.rolls[1].pinsknockedtotal)=== 10;
};

Score.prototype.isStrike = function() {
  return this.rolls[0].pinsknockedtotal === 10;
};