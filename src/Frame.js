function Frame() {
  this.pins = 10;
  this.rolls = 0;
  this.isLastFrame = false;
};

Frame.prototype.hit = function(pinsDown) {
  if (this.isOver()) {
    throw "Can not roll ball, frame is over!";
  } else {
    this.rolls += 1;
    this.pins -= pinsDown;
  };
}

Frame.prototype.isOver = function() {
  if (this.isLastFrame) {
    return this.isLastFrameOver();
  };
  return (this.rolls === 2 || this.pins === 0);
};

Frame.prototype.isLastFrameOver = function () {
  return (this.rolls === 2  && this.pins > 0) || (this.rolls === 3) ;
};

Frame.prototype.isStrike = function() {
  if(this.isLastFrame){return false};
  return (this.rolls === 1 && this.pins === 0);
};

Frame.prototype.isSpare = function() {
  if(this.isLastFrame){return false};
  return (this.rolls === 2 && this.pins === 0);
};
