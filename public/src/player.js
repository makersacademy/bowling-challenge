var Player = function() {
  this._pins = 0;
};

Player.prototype.bowl = function() {
  this._pins = Math.floor((Math.random() * (0 + 11)))
  return this._pins
};
