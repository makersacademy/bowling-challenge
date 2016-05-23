function Game(){
  this._score = 0;
  this._frames = [];
  this._bonuses = null;
  this._maxFrames = 10;
  this._PERFECT_SCORE = 300;
}

Game.prototype.addFrames = function(frame){
  if (this._frames.length >= this._maxFrames) {
    throw new Error('You may only play 10 frames.');
  } else 
    this._frames.push(frame);
    this.calculateGameScore(frame);
}

Game.prototype.calculateFramesLength = function(frame) {
  return this._frames.length;
}

Game.prototype.calculateBonuses = function(frame) {

}

Game.prototype.calculateGameScore = function(frame) {
  this._score += frame._details.pins
  return this._score 
}

Game.prototype.isPerfectGame = function() {
  return (this._score === 300);
}

Game.prototype.isGutterGame = function() {
  return (this._score === 0);
}

Game.prototype.nextFrame = function(frame) {
  var index = this._frames.indexOf(frame);
  return nextItem = this._frames[index + 1];
}

// Game.prototype.nextNextFrame = function(frame) {
//   return this._frames[this._frames.indexOf(frame) + 2];
// }

// Game.prototype.getNext = function(frame) {
//   return this._frames[++this._frames.current];
// }

Game.prototype.spareBonus = function(frame) {
  var index = this._frames.indexOf(frame);
  var nextItem = this._frames[index + 1];
  return nextItem._details.firstScore;
}

