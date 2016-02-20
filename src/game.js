function Game() {
  this.turn = 1;
  this.roll = 0;
  this.pins = 10;
  this.latest_score = 0;
};

Game.prototype.bowl = function() {
  this._hitPins();
  this.roll++;
  this._specialScore();
  this._changeTurn();
};

Game.prototype.endGame = function() {
  if (this.turn > 10) {
    return "Game Over!";
  };
};

Game.prototype.result = function() {
  if (this.latest_score == '/') {
    return "Spare!";
  }
  else if (this.latest_score == 'X') {
    return "Strike!";
  }
  else {
    return this.latest_score + " pins!";
  }
};


//private methods

Game.prototype._specialScore = function() {
  if (this.pins === 0 && this.roll === 2){
    this.latest_score = '/';
    this._lastTurn();
  }
  else if (this.pins === 0 && this._strikeConditions() ){
    this.latest_score = 'X';
    this.roll = 2;
    this._lastTurn();
  };
};

Game.prototype._strikeConditions = function() {
  return this.roll === 1 || this.roll === 4;
};

Game.prototype._lastTurn = function(){
  if (this.turn === 10) {
      this.roll = 3;
  };
};

Game.prototype._changeTurn = function() {
  if (this.roll % 2 === 0){
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