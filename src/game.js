function Game(player_name) {
  if (typeof player_name === 'undefined') {
    this.playerName = 'Player 1';
  } else {
    this.playerName = player_name;
  }

  this.currentFrame = 1;
  this.frames = {};

}

Game.prototype.newFrame = function() {
  if (this.currentFrame < 10) {
    this.frames['frame ' + this.currentFrame] = "blah";
    this.currentFrame ++;
  }

};

module.exports = Game;
