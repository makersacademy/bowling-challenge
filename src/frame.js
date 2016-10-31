function Frame(){
 this.roll = 2;
 this.pinCount = 10;
}

Frame.prototype.oneGame = function (pinCount) {
  this.roll --;
  this.pinCount -= pinCount;
};

Frame.prototype.defaultPins = function () {
  return this.pinCount;
};

Frame.prototype.isGameOver = function () {
  return (this.roll === 0);
};
