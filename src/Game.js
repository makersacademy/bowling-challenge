function Game(){

  this._frames = [];
  this.currentScore = 0;
  this.sum = 0;
}

Game.prototype.viewCurrentScore = function() {
  this._frames.forEach(function(frame) {
    this.currentScore += frame._frameScore;
  }, this);
  return this.currentScore
}

Game.prototype.startGame = function(frame){
  this._frames.push(frame);
}

Game.prototype.addFrame = function(frame) {
    const MAX_LENGTH = 10
  if (this._frames.length >= MAX_LENGTH) {
    throw new Error("The game is over!")
  } else {
     this._frames.push(frame);
  }
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
