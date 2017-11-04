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
