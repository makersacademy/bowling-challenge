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
  return this.strikeBonus(frame);
  return this.spareBonus(frame);
}

Game.prototype.addBonuses = function(frame) {
  this._bonuses += this.strikeBonus(frame);
  return this._bonuses;
}

Game.prototype.calculateGameScore = function(frame) {
  this._score += frame._details.pins;
  return this._score;
}

Game.prototype.aggregateAllPins = function(frame) {
  return this._score += this.calculateBonuses(frame);
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

Game.prototype.spareBonus = function(frame) {
  if (frame._details.id === 10) {
    return null; 
  } else {
    var index = this._frames.indexOf(frame);
    var nextItem = this._frames[index + 1];
    return nextItem._details.firstScore;
  }
}

Game.prototype.strikeBonus = function(frame) {
  if (frame._details.id === 10) {
    return null;
  } else {
    var index = this._frames.indexOf(frame);
    var nextItem = this._frames[index + 1];
    return (nextItem._details.firstScore + nextItem._details.secondScore);
  }
}