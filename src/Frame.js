function Frame() {
  this._rolls = [];
}

Frame.prototype.isComplete = function() {
  return this._rolls.length === 2 || this.roll1() === 10;
};

Frame.prototype.addRoll = function(n) {
  if (n > 10) { throw new Error('Cannot add a roll over 10') }
  if (this.roll1() + n > 10) { throw new Error('Sum of rolls cant be over 10') }
  if (!this.isComplete()) {
    this._rolls.push(n);
  }
};

Frame.prototype.roll1 = function (){
  return this._rolls[0];
};

Frame.prototype.roll2 = function (){
  return this._rolls[1];
};

Frame.prototype.total = function(){
  if (this.roll1() && this.roll2()) {
    return this.roll1() + this.roll2();
  } else if (this.roll1()) {
    return this.roll1();
  } else {
    return 0;
  }
};

Frame.prototype.rollsContain = function(n) {
  return this.roll1() === n || this.roll2() === n;
};

Frame.prototype.isStrike = function(){
  return this.roll1() === 10;
};

Frame.prototype.isSpare = function(){
  return this.roll1() + this.roll2() === 10;
};
