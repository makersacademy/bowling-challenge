function Frame() {
  this.rolls = [new Roll(null), new Roll(null)];
}

Frame.prototype.isSpare = function() {
  return (this.rolls[0].pinsknockedtotal + this.rolls[1].pinsknockedtotal)=== 10;
};

Frame.prototype.isStrike = function() {
  return this.rolls[0].pinsknockedtotal === 10;
};