var Game = function () {
  this.frames = [];
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.score = function() {
  var score = 0;
  for(var i = 0; i < 10; i++) {
    score += this.frames[i].rolls.reduce((a,b)=> a+b);
  };
  return score;
};
