var Frame = require("./Frame.js");

var uniq = require('uniq');

function Game(player_name) {
  if (typeof player_name === 'undefined') {
    this.playerName = 'Player 1';
  } else {
    this.playerName = player_name;
  }

  this.currentFrame = 0;
  this.frames = {};

}

Game.prototype.newFrame = function() {
  if (this.currentFrame < 10) {
    this.currentFrame ++;
    var frame = new Frame(this.currentFrame);
    this.frames['frame ' + this.currentFrame] = frame;
  }

};

Game.prototype.addScore = function(num) {
  this.frames['frame ' + this.currentFrame].Roll(num);
};

module.exports = Game;
