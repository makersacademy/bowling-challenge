function Player() {
  this.score = 0;
}

Player.prototype.newGame = function(game) {
  this.currentGame = game;
}

Player.prototype.roll = function(number) {
  if (this.currentGame.isInProgress()) {
    this.currentGame._addFrame();
    this._addToPairs(number);
    if (this.currentGame.isStrike(number) && this.currentGame._numberOfPairs() < 18) {
      this._addEmptyPairWhenStrike()
    }
  } else {
    alert("Game is over")
  }
}

Player.prototype._addToPairs = function(number) {
  var pair = {};
  pair[this.currentGame._lastFrame()] = number;
  this.currentGame.pairs.push(pair);
}

Player.prototype.countScore = function() {
  this.score = this.currentGame.generalScore();
}

Player.prototype.countbasicScore = function() {
  this.currentGame.basicScore();
}

Player.prototype.displayBasicScore = function() {
  return (this.currentGame.basicScore())
}

Player.prototype._addEmptyPairWhenStrike = function() {
  this.currentGame._addFrame();
  var emptyPair = {};
  emptyPair[this.currentGame._lastFrame()] = undefined;
  this.currentGame.pairs.push(emptyPair);
}
