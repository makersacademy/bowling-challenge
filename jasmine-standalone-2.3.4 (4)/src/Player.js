function Player() {
  this.score = 0;
}

Player.prototype.newGame = function(game) {
  this.currentGame = game;
}

Player.prototype.roll = function(number) {
  if (this.currentGame.isInProgress()) {
    this.currentGame._addFrame();
    if (number === 10 && this.currentGame._numberOfPairs() < 18 ){
      this.currentGame._addFrame();
    }
    this._addToPairs(number);
  } else {
    alert("Game is over")
  }
}

Player.prototype._addToPairs = function(number) {
  var pair = {};
  pair[this.currentGame._currentFrame()] = number;
  this.currentGame.pairs.push(pair);
  if (number === 10  && this.currentGame._numberOfPairs() < 18)  {
    var emptyPair = {};
    emptyPair[this.currentGame._currentFrame()] = undefined;
    this.currentGame.pairs.push(emptyPair);
  }
}
