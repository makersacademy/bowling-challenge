function Game() {

  Game.prototype.roll = function() {
    var pinsKnockedOver = Math.floor(Math.random() * 11);
    return pinsKnockedOver;
  }

}
