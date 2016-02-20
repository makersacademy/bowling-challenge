function Game() {
  this.turn = 1;
  this.roll = 0;
  this.pins = 10;
};

Game.prototype.bowl = function() {
  this._hitPins();
  this.roll++;
  this._changeTurn();
};


//private methods

Game.prototype._changeTurn = function() {
  if (this.roll === 2){
    this.turn++;
  };
};

Game.prototype._hitPins = function() {
  this.pins = this.pins - this._getRandomInt(0, this.pins+1);
};

Game.prototype._getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (min - max)) + min;
};