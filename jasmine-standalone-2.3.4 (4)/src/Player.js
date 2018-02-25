function Player() {
  this.score = 0;
}

Player.prototype.newGame = function(game) {
  this.currentGame = game;
}

Player.prototype.roll = function(number) {
  if (this.currentGame.isInProgress()) {
    if (number === 10 && this.currentGame._numberOfPairs() < 18 ){
      this.currentGame._addFrame();
      this.currentGame._addFrame();
    } else {
      this.currentGame._addFrame();
    }
    this._addToPairs(number);
  } else {
    alert("Game is over")
  }
}

Player.prototype._addToPairs = function(number) {
  if (number === 10 )  {
    var hash = {};
    hash[this.currentGame._currentFrame().toString()] = number;
    this.currentGame.pairs.push(hash);
    if (this.currentGame.pairs.length < 18 ) {
      var hash2 = {};
      hash2[this.currentGame._currentFrame().toString()] = undefined;
      this.currentGame.pairs.push(hash2);
    }
  } else {
    var hash = {};
    hash[this.currentGame._currentFrame().toString()] = number;
    this.currentGame.pairs.push(hash);
  }
}
