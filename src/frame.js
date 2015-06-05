function Frame() {

  this.pinCount = 10;
  this.rollCount = 0;
  this.isOver = false;
};


Frame.prototype.knockPins = function(number) {
  if (this.rollCount < 2) {
    this.pinCount = (this.pinCount - number );
    this.rollCount = (this.rollCount + 1);
  } else {
    this.isOver = true;
  }
};

