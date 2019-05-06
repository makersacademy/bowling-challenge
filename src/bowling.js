function Player(name) {
  this.name = name
  this.points = [];
};

Player.prototype.score = function(score, game) {
  this.points[game.frame].push(score);
  // if (score === 10) || (this.points[Game.frame()].length === 2) {
  //   playerIndex += 1
  // }
};

function Game() {
  this.players = [];
  this.frame = 0;
  this.currentPlayer = 0;
};

Game.prototype.addPlayer = function(name) {
  var player = new Player(name);
  this.players.push(player);
};

Game.prototype.playerTurn = function() {

};



// if this.currentPlayer === this.players.length {
//   this.currentplayer = 0;
//   this.frame += 1;
// }
