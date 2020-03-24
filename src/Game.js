'use strict';

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

Game.prototype.addScore = function(ball1,ball2) {
  this.frameCount += 1
  if(this.strike === true) {this._isAStrike(ball1,ball2)};
  if(this.spare === true) {this._isASpare(ball1,ball2)}
  if(this.strike === false && this.spare === false) {this.score += ball1 + ball2 }
  this._resetStrike(ball1,ball2);
  this._resetSpare(ball1,ball2);
};

Game.prototype._isAStrike = function(ball1,ball2) {
  this.score += (ball1 + ball2) * 2;
};

Game.prototype._isASpare = function(ball1,ball2) {
  this.score += (ball1 * 2) + ball2;
};

Game.prototype._resetStrike = function(ball1,ball2) {
  if(ball1 === 10 && ball2 === 0) {this.strike = true} else {this.strike = false};
};

Game.prototype._resetSpare = function(ball1,ball2) {
  if((ball2 != 0) && (ball1 + ball2) === 10) {this.spare = true} else {this.spare = false};
};

Game.prototype.resetScore = function(ball1,ball2) {
  this.score = 0
}


