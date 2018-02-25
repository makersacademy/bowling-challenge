function Player() {
  this.score = 0;
}

Player.prototype.newGame = function(game) {
  this.currentGame = game;
}

Player.prototype.roll = function(number) {
  if (this.currentGame.isInProgress) {
    this.currentGame._addFrame();
    if (number === 10 ){
      this.currentGame._addFrame(); // chyba ze jestesmy w 10 frame
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
    var hash2 = {};
    hash2[this.currentGame._currentFrame().toString()] = undefined; //chyba ze w 10 frame
    this.currentGame.pairs.push(hash2);
  } else {
    var hash = {};
    hash[this.currentGame._currentFrame().toString()] = number;
    this.currentGame.pairs.push(hash);
  }
}
