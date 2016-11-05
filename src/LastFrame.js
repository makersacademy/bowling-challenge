function LastFrame() {
  this._rolls = [];
  this._extra = 0;
}

LastFrame.prototype.isComplete = function() {
  return (this.roll1() + this.roll2() < 10) || this._rolls.length === 3;
};

LastFrame.prototype.addRoll = function(n) {
  if (n > 10) { throw new Error('Cannot add a roll over 10') }
  if (!this.isComplete()) {
    this._rolls.push(n);
  }
};

LastFrame.prototype.addValue = function(n) {
  this._extra += n;
}

LastFrame.prototype.roll1 = function (){
  return this._rolls[0];
};

LastFrame.prototype.roll2 = function (){
  return this._rolls[1];
};

LastFrame.prototype.roll3 = function (){
  return this._rolls[2];
};

LastFrame.prototype.total = function(){
  if (this.roll1()>=0 && this.roll2()>=0 && this.roll3()>=0) {
    return this.roll1() + this.roll2() + this.roll3() + this._extra;
  } else if (this.roll1()>=0 && this.roll2()>=0) {
    return this.roll1() + this.roll2() + this._extra;
  } else if (this.roll1()>=0) {
    return this.roll1() + this._extra;
  } else {
    return 0;
  }
};

LastFrame.prototype.isStrike = function(){
  return this.roll1() === 10;
};

LastFrame.prototype.isSpare = function(){
  return this.roll1() + this.roll2() === 10;
};

LastFrame.prototype.hasNoRolls = function() {
  return this.roll1() === undefined
};

LastFrame.prototype.notRoll3 = function () {
  return this.hasNoRolls() || this.roll2() == undefined
};
