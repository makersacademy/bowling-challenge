function Game(){
  this._frames = [];
}

Games.prototype.addFrame = function(frame){
  this._frames.push(frame);
}

game = new Game();
game.addFrame(new Frame());
