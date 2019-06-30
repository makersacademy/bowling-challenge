function BowlingGame () {
  this.frame = [];
};

BowlingGame.prototype.roll = function (pinsKnockedDown) {
  this.addToFrame(pinsKnockedDown);
  return pinsKnockedDown;
};

BowlingGame.prototype.addToFrame = function (pinsKnockedDown) {
  this.frame.push(pinsKnockedDown);
};
