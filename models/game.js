const Frame = require('./frame.js');

function Game() {
  this._frames = [];
  this._status = 'in progress';
  this._debt = 0;
  this._finalRolls = [];
  this._score = 0;
  this._lastBonus = '';
};

Game.prototype.play = function(pins) {
  if(this._frames.length < 10) {
    (!(this._frames.length) || this._isComplete()) && this._newFrame();
    this._execute(pins);
  } else if(this._last().showStatus() == 'in progress') {
      this._execute(pins);
      this._makeComplete();
  } else {
      this._finalRolls.push(pins);
      this._debt++; this._score += pins;
      this._makeComplete();
  }; return this;
};

Game.prototype.showScore = function() {
  return this._score;
};

Game.prototype.reset = function() {
  this._frames = [];
  this._status = 'in progress';
  this.debt = 0;
  this._finalRolls = [];
  this._score = 0;
  this._lastBonus = '';
};

Game.prototype.showStatus = function() {
  return this._status;
};

Game.prototype.lastBonus = function() {
  return this._lastBonus;
};

Game.prototype.currentFrame = function() {
  return this._frames.length + ( this._isComplete() ? 1 : 0)
};

Game.prototype.currentRoll = function() {
  return (!this._isComplete()) + 1;
};

Game.prototype._updateDebt = function() {
  this._lastBonus = this._last().showBonus();
  if(this._last().showBonus() == 'strike') { this._debt -= 2 };
  if(this._last().showBonus() == 'spare') { this._debt--; };
};
  
Game.prototype._updateScore = function() {
  let rolls = this._last().showRolls();
  rolls.forEach(roll => {if(this._debt < 0) { this._debt++; roll *=2 }; this._score += roll});
};

Game.prototype._last = function() {
  return this._frames[this._frames.length - 1];
};

Game.prototype._update = function() {
  this._updateScore();
  this._updateDebt();
};

Game.prototype._newFrame = function() {
  this._frames.push(new Frame());
};

Game.prototype._isComplete = function() {
  return this._last().showStatus() == 'complete';
};

Game.prototype._execute = function(pins) {
  this._last().roll(pins);
  this._isComplete() && this._update();
}

Game.prototype._makeComplete = function() {
  if (!(this._debt) || this._last().showRolls().length + this._finalRolls.length == 3) {
    this._status = 'complete';
  }
};

module.exports = Game; 
