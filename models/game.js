const Frame = require('./frame.js');

function Game() {
  this._frames = [];
  this._status = 'in progress';
  this._debt = 0;
  this._score = 0;
};

Game.prototype.play = function(pins) {
  if(this._frames.length === 0 || this._frames[this._frames.length-1].showStatus() == 'complete') {
    this._frames.push(new Frame());
  } 
  this._frames[this._frames.length-1].roll(pins);
  if (this._frames[this._frames.length-1].showStatus() == 'complete'){
    this._updateScore();
  };
};

Game.prototype.showScore = function() {
  return this._score;
};
  
Game.prototype._updateScore = function() {
  let rolls = this._frames[this._frames.length-1].showRolls();
  rolls.forEach(roll => {if(this._debt < 0) { this._debt++; roll *=2 }; this._score += roll});
};

module.exports = Game; 
