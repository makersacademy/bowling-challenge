function Frame(){
 this.roll = 0;
 this.pinCount = 10; //pins striked down
 this.pinTotal = 10;

}

Frame.prototype.oneGame = function (pinCount) {
  if (this.pinCount - pinCount < 0) {
    throw 'You cannot knock down more than 10 pins'
  }
  this.roll ++;
  this.pinCount -= pinCount;
};

Frame.prototype.defaultPins = function () {
  return this.pinCount;
};

Frame.prototype.isStrike = function () {
  return (this.roll === 1 && this.pinCount === 0);
};

Frame.prototype.isSpare = function () {
  return (this.roll === 2 && this.pinCount === 0);
};

Frame.prototype.isGameOver = function () {
  return (this.roll === 2 || this.pinCount === 0);
};

Frame.prototype.totalPinDown = function () {
  return (this.pinTotal - this.pinCount);
};
