var Frame = function(){
  this.MAX_POINTS = 10;
  this.MAX_ROLLS = 2;
  this.rollCount = 0;
};

Frame.prototype.roll = function(){
  if (this.rollCount === this.MAX_ROLLS) {
    throw "Frame is over"
  } else {
    this.rollCount += 1;
    return Math.floor(Math.random() * 10);
  }
}
