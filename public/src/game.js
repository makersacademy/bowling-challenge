function Game() {
  this.currentPoints = this.defaultPoints;
  this.gameFrame = [];
  this.arrayGame = [];
}

Game.prototype.roll = function () {
  rollOne = Math.floor(Math.random() * 11)
  this.gameFrame.push(rollOne);
  console.log(this.gameFrame);
  this.pushToArray();
};

Game.prototype.pushToArray = function () {
  this.arrayGame.push(this.gameFrame);
  console.log(this.arrayGame);
};

// Game.prototype.addScore = function ) {
//   this.
// });

var game = new Game();
