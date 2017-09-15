// var Frame = require("./Frame.js");

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
  this.MAX_PINS = 10;
  this.MAX_FRAMES = 10;
  this.STRIKE = 'Strike';
  this.SPARE = 'Spare';

}

Game.prototype.newFrame = function() {
  if (this.currentFrame < this.MAX_FRAMES) {
    this.currentFrame ++;
    var frame = new Frame(this.currentFrame);
    this.frames['frame ' + this.currentFrame] = frame;
  }

};

Game.prototype.addScore = function(num) {
  this.frames['frame ' + this.currentFrame].Roll(num);
};

Game.prototype.getFrameScore = function(frameNo) {
  return this.frames['frame ' + frameNo].pinsKnockedDown;
};

Game.prototype.getScore = function() {
  this.score = 0;
  for (i=1; i<=this.currentFrame; i++) {
    this.score += this.sumFrame(i, true);
    this.score += this.bonusCheck(i);
  }
  return this.score;
};

Game.prototype.sumFrame = function(index, returnSum) {
  this.frame = this.frames['frame ' + index].pinsKnockedDown;
  var sum;
  if (returnSum === true) {
    sum = this.frame.reduce(function(a, b){
      return a + b;
    });
  } else {
    sum = this.frame[0];
  }
  return sum;
};

Game.prototype.bonusCheck = function(index) {
  this.frame = this.frames['frame ' + index].pinsKnockedDown;
  if (this.frame[0] === this.MAX_PINS && index < this.currentFrame) {
    // if (index + 1 < this.currentFrame)
    return this.sumFrame(index + 1, true);
  } else if (this.sumFrame(index, true) === this.MAX_PINS && index < this.currentFrame) {
    return this.sumFrame(index + 1, false);
  } else {
    return 0;
  }
};

module.exports = Game;
