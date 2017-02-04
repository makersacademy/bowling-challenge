function Game(){
  this._frames = [];
}

Game.prototype.startGame = function(frame){
  this._frames.push(frame);
}

Game.prototype.addFrame = function(frame) {
  this._frames.push(frame);
}

game = new Game();
game.startGame(new Frame());


// function Game() {
//   this._frames = []
// }
//
// Game.prototype.startGame = function(frame){
//   this._frames.push(frame)
// };
//
// game = new Game();
// game.startGame()(new Frame());

// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };
