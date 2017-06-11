var Game = function () {
  this.frames = [];
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame.rolls);
};

Game.prototype.score = function() {
  var score = 0;
  for(var i = 0; i < 10; i++) {
    if(this.isSpare(this.frames[i])) {
      score += 10 + this.frames[i+1][0];
    } else {
      score += (this.frames[i][0] + this.frames[i][1]);
    };
  };
  return score;
};

Game.prototype.isSpare = function(frame) {
  return frame[0] + frame[1]  === 10;
};
