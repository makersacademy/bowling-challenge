function Player() {
}

Player.prototype.roll = function(amount, frame, scorecard) {
  scorecard.roll(amount, frame);
};
