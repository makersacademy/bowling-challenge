const GAME_LENGTH = 10;


function Game(){

  this._frames = [];
  this.currentScore = 0;
  this._complete = false;
  this._currentFrameIndex = 0;
}

Game.prototype.viewCurrentScore = function() {
  this._frames.forEach(function(frame) {
    this.currentScore += frame._frameScore;
    console.log(frame._frameScore);
    console.log(this.currentScore);
  }, this);
  return this.currentScore;
};

Game.prototype.bowl = function(num) {
  this.currentFrame().bowl(num);
};

Game.prototype.currentFrame = function(){
  return this._frames[this._currentFrameIndex];
};

Game.prototype.startGame = function(){
    for (let i = 1; i < 11; i++ ){
      let frame = new Frame();
      this._frames.push(frame);
    }
  };

// Game.prototype.addFrame = function(frame) {
//     this.checkEnd();
//   if (this._frames.length >= GAME_LENGTH) {
//     throw new Error("The game is over!");
//   } else {
//      this._frames.push(frame);
//   }
// };

// Game.prototype.isComplete = function() {
//   return this._complete;
// };

// Game.prototype.checkEnd = function () {
//   if (this._frames.length === 10) {
//     this._complete = true;
//   }
// };

// Game.prototype.isComplete = function (){
//   if (this._frames.length === 10 && this._frames[-1].isComplete === true) {
//     this._complete = true;
//     return this._complete
//   }
// }


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
