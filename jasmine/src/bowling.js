function Bowling() {
  this.scoreSheet = [];
  this.currentFrame = {}

  Bowling.prototype.newGame = function() {
    this.currentFrame = new Frame()
  };
};

function Frame() {
  this.bowlsRemaining = 2
};
