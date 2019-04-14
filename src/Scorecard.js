function Scorecard() {
  this.frames = [];
  this.frameIndex = 0;
  this.frameScores = ['','','','','','','','','',''];
  this.totalScore = 0;
};

Scorecard.prototype.startGame = function() {
  for(i = 0; i < 10; i++) { this.frames.push(new Frame(i)) };
  this.frames[0].changeStatus('active');
};

Scorecard.prototype.roll = function(pins_knocked_down) {
  this.frames.forEach(function(frame) {
    if(frame.status() === 'active') {
      frame.add_roll(pins_knocked_down);
    };
  });
  this.calculateFrameScores();
  if(this.isGameOver() === false) { this.manageFrame() };
};

Scorecard.prototype.manageFrame = function() {
  if(this.currentFrame().isInPlay() === false) {
    this.frameIndex++;
    this.currentFrame().changeStatus('active');
  };
};

Scorecard.prototype.isGameOver = function() {
  return this.frames[9].status() === 'complete'
};

Scorecard.prototype.currentFrame = function() {
  return this.frames[this.frameIndex]
};

Scorecard.prototype.calculateFrameScores = function() {
  var runningTotal = 0;
  var frameScores = this.frameScores;
  this.frames.forEach(function(frame) {
    if(frame.status() === 'complete') {
      runningTotal += frame.score();
      frameScores[frame.index] = runningTotal;
    };
  });
  this.totalScore = runningTotal;
};
