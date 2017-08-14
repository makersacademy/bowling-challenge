function Player() {
}

Player.prototype.roll = function(amount, game, scorecard) {
  scorecard.roll(amount, game.getFrame(scorecard));
  game.calculatespare(scorecard);
  game.calculatestrike(scorecard);
};
