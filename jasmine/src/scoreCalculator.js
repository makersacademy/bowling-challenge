function Calculator(){
  this.score = 0
};

Calculator.prototype.scoreFrame = function (frame) {
  this.score += frame[0] + frame[1]
};
