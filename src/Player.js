var Player = function() {
  this._firstBowl = 10

};

Player.prototype.bowl = function() {
  this._firstBowl = (Math.floor(Math.random() * 10))
  return this._firstBowl
};

Player.prototype.secondBowl = function() {
  pinsLeft = 10 - this._firstBowl;
  return(Math.floor(Math.random() * pinsLeft))
};
