var BowlingContest = function() {
  this.players = {}
  this.isReady = false
};

BowlingContest.prototype.addPlayer = function(player) {
  this.players["player" + (this.numberOfPlayers() + 1)] = player;
};

BowlingContest.prototype.setToReady = function() {
  if(this.numberOfPlayers() <= 0) throw new Error("Please add a player first");
  this.isReady = true
};

BowlingContest.prototype.isOver = function() {
  if (!this.isReady) return false;
  for (var i = 0; i < this.numberOfPlayers(); i++) {
    if (!(this.playerArray()[i].game.isOver())) return false;
  }
return true;
};

BowlingContest.prototype.playerArray = function() {
  playerArray = []
  for(i = 0; i < Object.keys(this.players).length; i ++) {
    playerArray.push(this.players[Object.keys(this.players)[i]]);
  }
  return playerArray;
};

BowlingContest.prototype.currentPlayer = function() {
  var latestFrame = this.playerArray()[0].currentFrameNumber();
  for(var i = 0; i < this.numberOfPlayers(); i ++) {
    if (this.playerArray()[i].currentFrameNumber() < latestFrame) return this.playerArray()[i];
  }
  return this.playerArray()[0];
};

BowlingContest.prototype.numberOfPlayers = function() {
  return this.playerArray().length;
};

BowlingContest.prototype.winner = function() {
  var isDraw = false;
  var highScorer = this.players["player1"];
  //debugger;
  for(i = 1; i < Object.keys(this.players).length; i ++) {
    if(this.players[Object.keys(this.players)[i]].score() > highScorer.score()) {
      highScorer = this.players[Object.keys(this.players)[i]];
    } else if (this.players[Object.keys(this.players)[i]].score() === highScorer.score()) {
      isDraw = true;
    }
  }
  return (isDraw ? "Draw" : highScorer);
};