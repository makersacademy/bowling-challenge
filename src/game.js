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

Game.prototype.calculateScore = function() {

}

  // this._score.reduce(function (a, b){
  //   this._score = a + b;
  // });
  // return this._score;