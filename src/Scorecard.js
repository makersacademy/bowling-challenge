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
  if(this.isRollValid(pins_knocked_down)){
    this.frames.forEach(function(frame) {
      if(frame.status() === 'active') {
        frame.add_roll(pins_knocked_down);
      };
    });
    this.calculateFrameScores();
    if(this.isGameOver() === false) { this.manageFrame() };
  }
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

Scorecard.prototype.isRollValid = function(roll) {
  if(roll > 10 || roll < 0) {
    return false;
  } else if(this.currentFrame().rolls().length === 0) {
    return true;
  } else if(this.currentFrame().rolls().length === 1 && this.currentFrame().rolls()[0] !== 10) {
    return this.currentFrame().rolls()[0] + roll > 10 ? false : true;
  } else if(this.currentFrame().rolls().length === 1) {
    return true;
  } else {
    return true;
  };
};
