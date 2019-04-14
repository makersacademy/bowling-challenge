//bowling game
function BowlingGame() {
  this.scoreCard = [];
  this.frames = [];
  this.frame = new Frame();
  this.frameIndex = 0;
};

BowlingGame.prototype.recordFrame = function() {
  this.frames.push(this.frame);
  this.frame = new Frame();
};


//play
// bowlingGame = new BowlingGame();





















