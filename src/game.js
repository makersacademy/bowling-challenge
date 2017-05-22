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
  this.score = 0;
  this.frame = 0;

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

Game.prototype.getScore = function() {
  this.score = 0;
  for (i=1; i<=this.currentFrame; i++) {
    this.score += this.sumFrame(i);
    if (this.sumFrame(i) === 10 && i < this.currentFrame) {
      this.score += this.sumFrame((i + 1));
    }
  }
  return this.score;
};

Game.prototype.sumFrame = function(index) {
  this.frame = this.frames['frame ' + index].pinsKnockedDown;
  var sum = this.frame.reduce(function(a, b){
    return a + b;
  });
  return sum;
};

module.exports = Game;
