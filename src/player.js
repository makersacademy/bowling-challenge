function Player() {
}

Player.prototype.roll = function(amount, frame, scorecard) {
  if(frame < 11) {
    scorecard.roll(amount, frame);
  }   
};
