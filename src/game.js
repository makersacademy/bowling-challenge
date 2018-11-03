var Game = function() {
  this.frames = [];
  this.gameScore;
}

// **************** Class Functinos ******************

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Game.prototype.generateTotalScore = function() {
  var total = 0;

  this.frames.forEach(function(frame) {
    total += frame.frameScore;
  });

  this.gameScore = total;
};
