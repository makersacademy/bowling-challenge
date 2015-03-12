BowlingGame = function(){
  this.CurrentFrame = []
};

BowlingGame.prototype.roll = function(pins) {
  this.CurrentFrame.push(pins);
};