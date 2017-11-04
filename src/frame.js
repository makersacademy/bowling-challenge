function Frame() {
  this._bowls = [];
}

//getters

Frame.prototype.bowls = function() {
  return this._bowls;
};

//straight forward Frame business

Frame.prototype.bowl = function(pins) {
  this._bowls.push(pins);
};
