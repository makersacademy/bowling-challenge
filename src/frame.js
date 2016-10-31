function Frame(){
 this.pinCount = 10;
}

Frame.prototype.oneGame = function (pinCount) {
  this.pinCount -= pinCount;
};

Frame.prototype.defaultPins = function () {
  return 10;
};
