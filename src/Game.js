function Game() {
  this.isStarted = false;

  this.start = function() {
    this.isStarted = true;
    prepareGame();
  }
};




// Game.prototype.start = function() {
//     this.isStarted = true;
// };