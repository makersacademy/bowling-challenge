function Bowling() {
  this.players = [];
  this.currentPlayer = 0;
  this.currentFrame = 1;
  this.defaultBowl = null;
  this.firstBowl = this.defaultBowl;
  this.secondBowl = this.defaultBowl;
};

Bowling.prototype.addPlayer = function(name){
  this.players.push( new Player(name));
};

Bowling.prototype.getCurrentPlayer = function() {
  return this.players[this.currentPlayer];
};

Bowling.prototype.playerCount = function() {
  return this.players.length;
};

Bowling.prototype.changeTurn = function() {
  if (this.currentPlayer < this.playerCount() -1 ) {
    this.currentPlayer++;
  } else {
    this.currentPlayer = 0;
    this.incrCurrentFrame();
  }
};

Bowling.prototype.getCurrentFrame = function() {
  return this.currentFrame;
};

Bowling.prototype.incrCurrentFrame = function() {
  this.currentFrame++;
};

Bowling.prototype.storeFirst = function(number) {
  this.firstBowl = number;
};

Bowling.prototype.storeSecond = function(number) {
  this.secondBowl = number;
};

Bowling.prototype.saveCurrentPlayerFrame = function() {
  this.getCurrentPlayer().addFrame(this.firstBowl, this.secondBowl);
  this.firstBowl = this.defaultBowl;
  this.secondBowl = this.defaultBowl;
  this.changeTurn();
};

Bowling.prototype.gameEnded = function() {
  premise = true
  for (let index = 0; index < this.players.length; index++) {
    const element = this.players[index];
    if(element.gameOver != true) {
      premise = false;
      return premise;
    }
  }
  return premise;
}