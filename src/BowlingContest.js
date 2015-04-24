var BowlingContest = function() {
  this.players = {}
};

BowlingContest.prototype.addPlayer = function(player) {
  this.players["player" + (this.numberOfPlayers() + 1)] = player;
};

BowlingContest.prototype.isOver = function() {
  for (i = 0; i < this.numberOfPlayers; i++) {
    if (!(this.players["player" + i].game.isOver())) return false
  }
return true
};

BowlingContest.prototype.numberOfPlayers = function() {
  playerArray = []
  for(i = 0; i < Object.keys(this.players).length; i ++) {
    playerArray.push(this.players[Object.keys(this.players)[i]]);
  }
  return playerArray.length
};

BowlingContest.prototype.winner = function() {
  highScorer = this.players["player1"]
  for(i = 0; i < Object.keys(this.players).length; i ++) {
    if(this.players[Object.keys(this.players)[i]].score() > highScorer.score()) {
      highScorer = this.players[Object.keys(this.players)[i]]
    }
  }
  return highScorer
};