function Game(){
  this._score = 0;
  this._frames = [];
  this._maxFrames = 10;
}

Game.prototype.addFrames = function(frame){
  // if (this._frames.length >= this._maxFrames) {
  //   throw new Error('You may only play 10 frames.');
  // } else 
  // for(var id = 0; id < 10; id++) {
    this._frames.push(new Frame(1));
  // }
}

Game.prototype.calculateFrames = function(frame) {
  return this._frames.length;
}

Game.prototype.calculateFrameScore = function(id) {
  this._score += (this._frames[id]._details.pins)
}
