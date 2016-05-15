function Game(){
  this._score = 0;
  this._frames = [];
  this._maxFrames = 10;
}

Game.prototype.addFrames = function(frame){
  if (this._frames.length >= this._maxFrames) {
    throw new Error('You may only play 10 frames.');
  } else 
  for(var f = 0; f < 10; f++) {
    this._frames.push(frame);
  }
}

Game.prototype.calculateFrames = function(frame) {
  return this._frames.length;
}

Game.prototype.calculateScore = function(f) {
  // for(var f = 0; f < 10; f++) {
  //   this._score += (this._frames[0]._details.pins)
  // }
  // return this._score;
}
