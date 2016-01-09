function Game() {
  this._frames = []
}

var game = new Game();

function Frame() {

}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame)
}
