function Game(name) {
  this.player = name;
  this.turn = 1;
  this.roll = 0;
  this.pins = 10;
  this.score = new Score();
}

Game.prototype.bowl = function() {
  if (this.turn > 10) {
    throw "The Game is Over";
  }
  this._hitPins();
  this.roll++;
  this._specialScore();
  this._changeTurn();
};

Game.prototype.lastScore = function() {
  return this.score.viewLatestScore();
};

Game.prototype.result = function() {
  if (this.turn > 10){
    return this._endGame();
  }
  else if (this.lastScore() === '/') {
    return "Spare!";
  }
  else if (this.lastScore() === 'X') {
    return "Strike!";
  }
  else {
    var pins = this._plural();
    return this.lastScore() + pins;
  }
};

Game.prototype.frameScore = function(frame) {
  return this.score.viewFrameScore(frame-1);
};

Game.prototype.total = function() {
  return this.score.viewTotal();
};

//private methods

Game.prototype._endGame = function() {
    return "Game Over!";
};

Game.prototype._plural = function() {
  if (this.lastScore() === 1){
    return " pin!"
  }
  else {
    return " pins!"
  }
}

Game.prototype._specialScore = function() {
  if (this.pins === 0 && this.roll === 2){
    this._changeLatestScore('/');
    this.score.setBonus(1);
    this._lastTurn();
  }
  else if (this.pins === 0 && this._strikeConditions() ){
    this._changeLatestScore('X');
    this.score.setBonus(2);
    this.roll = 2;
    this._lastTurn();
  }
};

Game.prototype._strikeConditions = function() {
  return this.roll === 1 || this.roll === 4;
};

Game.prototype._lastTurn = function(){
  if (this.turn === 10) {
      this.roll = 3;
  }
};

Game.prototype._changeTurn = function() {
  if (this.roll % 2 === 0){
    this.turn++;
    this.pins = 10;
    this.roll = 0;
    this.score.newFrame();
  }
};

Game.prototype._hitPins = function() {
  this._changeLatestScore(this._getRandomInt(this.pins+1));
  this.score.addResult(this.lastScore(), (this.turn-1));
  this.pins = this.pins - this.lastScore();
};

Game.prototype._changeLatestScore = function(new_score) {
  this.score.changeLatestScore(new_score);
};

Game.prototype._getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};