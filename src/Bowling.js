function Frame() {
  this.throws = 1;
  this._score = 0;
  this._remaingPins = 10;
  this._total = ;
};

Frame.prototype.bowl = function(){ this.throw ++};

Frame.prototype.pinsKnocked = function(num) {
  this._remaingPins -= num;
  this._score += num;
};
