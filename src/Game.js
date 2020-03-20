function Game() {
  this.playername;
  this.score = 0;
  this.MAX_FRAMES = 10
  this.frameCount = 0
  this.strike = false
  this.spare = false
};

Game.prototype.addPlayer = function(name) {
  this.playername = name
};

Game.prototype.addScore = function(number) {
  this.frameCount += 1
  if(this.strike === true) {this._isAStrike(number)};
  if(this.strike === false) {this.score += number;}
  this._resetStrike(number);
};

Game.prototype._isAStrike = function(number) {
  this.score += (number * 2);
};

Game.prototype._resetStrike = function(number) {
  if(number === 10) {this.strike = true} else {this.strike = false};
};


