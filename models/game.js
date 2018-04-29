const Frame = require('./frame.js');

function Game() {
  this._frames = [];
  this._status = 'in progress';
  this._debt = 0;
  this._finalRolls = [];
  this._score = 0;
};

Game.prototype.play = function(pins) {
  if(this._frames.length < 10) {
  if(this._frames.length === 0 || this._frames[this._frames.length-1].showStatus() == 'complete') {
    this._frames.push(new Frame());
  } 
  this._frames[this._frames.length-1].roll(pins)
  if (this._frames[this._frames.length-1].showStatus() == 'complete'){
    this._updateScore();
    this._updateDebt();
    if(this._frames.length == 10) { this._status = 'complete'};
  }
  } else if(this.showStatus() == 'in progress') {
      this._frames[this._frames.length-1].roll(pins);
      this._updateScore();
      this._updateDebt();
      this._status = 'complete';
  }
  else {
    if (this._frames.length == 10 && (this._debt == 0 || this._frames[this._frames.length-1].showRolls().length + this._finalRolls.length == 3)) { this._status = 'complete'}
    else {
      this._finalRolls.push(pins);
      this._debt++;
      this._score += pins;
    }
  }
  return this;
};

Game.prototype.showScore = function() {
  return this._score;
};

Game.prototype.showStatus = function() {
  return this._status;
};

Game.prototype._updateDebt = function() {
  if(this._frames[this._frames.length -1].showBonus() == 'strike') { this._debt -= 2 };
  if(this._frames[this._frames.length-1].showBonus() == 'spare') { this._debt--; };
};
  
Game.prototype._updateScore = function() {
  let rolls = this._frames[this._frames.length-1].showRolls();
  rolls.forEach(roll => {if(this._debt < 0) { this._debt++; roll *=2 }; this._score += roll});
};

module.exports = Game; 
