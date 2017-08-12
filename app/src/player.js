function Player() {
}

Player.prototype.roll = function(amount, scorecard) {
  scorecard.roll(amount);
};
