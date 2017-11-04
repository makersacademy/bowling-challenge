function Frame() {
  this._bowls = [];
}

//getters

Frame.prototype.bowls = function() {
  return this._bowls;
};

//straight forward Frame business

Frame.prototype.bowl = function(pins) {
  if (pins > 10) throw new Error ("The maximum number of pins for one roll is 10");
  if (this.bowls()[0] + pins > 10) throw new Error ("Two bowls can only knock down 10 pins");
  this._bowls.push(pins);
};

Frame.prototype.isStrike = function() {
  if (this.bowls()[0] == 10) return true;
};

Frame.prototype.isSpare = function() {
  if(this.bowls()[0] != 10 && this.bowls()[0] + this.bowls()[1] == 10) return true;
};

Frame.prototype.isOpenFrame = function() {
  if(this.bowls()[0] + this.bowls()[1] < 10) return true;
};

Frame.prototype.isOver = function() {
  if (this._bowls.length == 2|| this.bowls()[0] == 10) return true;
};
