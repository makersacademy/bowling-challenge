function Game() {
  this.turn = 1;
  this.roll = 0;
  this.pins = 10;
  this.latest_score = 0;
};

Game.prototype.bowl = function() {
  this._hitPins();
  this.roll++;
  this._changeTurn();
};

Game.prototype.result = function() {
  if (this.turn > 10) {
    return "Game Over!";
  }
  else {
    return this.latest_score + " pins!";
  }
};


//private methods

Game.prototype._changeTurn = function() {
  if (this.roll === 2){
    this.turn++;
    this.pins = 10;
    this.roll = 0;
  };
};

Game.prototype._hitPins = function() {
  this.latest_score = this._getRandomInt(0, this.pins+1)
  this.pins = this.pins - this.latest_score;
};

Game.prototype._getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (min - max)) + min;
};