function Frame(){
  this.rollCount = 1;
  this._over = false;
  this.isStrike = false;
  this.isSpare = false;
  this._pinsLeft = 10;
};

Frame.prototype.roll = function(pins){
  this._pinsLeft -= pins;
  if (this.rollCount === 1 && this._pinsLeft === 0) {
    this._over = true;
    this.isStrike = true;
  } else if (this.rollCount === 1 && this._pinsLeft !== 0){
    this.rollCount = 2;
  } else if (this.rollCount === 2 && this._pinsLeft === 0) {
    this._over = true;
    this.isSpare = true;
  } else {
    this._over = true;
  };
};

Frame.prototype.isOver = function(){
  return this._over;
};
