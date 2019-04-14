//bowling game
function BowlingGame() {
  this.scoreCard = [];
  this.frames = [];
  this.frame = new Frame();
  this.frameIndex = 0;
};

BowlingGame.prototype.recordFrame = function() {
  this.frames.push(this.frame);
};

BowlingGame.prototype.newFrame = function() {
  this.frames.push(this.frame);
};

BowlingGame.prototype.addScore = function(index) {

  if (!this.frames[index].strike() && !this.frames[index].spare()) {
    this.scoreCard.push(this.frames[index].score());
  }

};

BowlingGame.prototype.finalScore = function(scoreCard) {
  return scoreCard.reduce((accumulator, currentValue) => accumulator + currentValue)
};

//play
// bowlingGame = new BowlingGame();





















