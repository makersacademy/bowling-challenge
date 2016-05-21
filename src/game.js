function Game(){
  this._score = 0;
  this._frames = []
  this._maxFrames = 10;
}

Game.prototype.addFrames = function(frame){
  if (this._frames.length >= this._maxFrames) {
    throw new Error('You may only play 10 frames.');
  } else 
    this._frames.push(frame);
}

Game.prototype.calculateFramesLength = function(frame) {
  return this._frames.length;
}

Game.prototype.calculateGameScore = function(frame) {
  this._score += frame._details.pins
  return this._score
}
