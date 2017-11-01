function game() {

}

LAST_FRAME = 10;

game.prototype.frameScoreWithBonus = function(frames, selectedFrameNumber) {
  // start with last frame catch condition
    finalFrameScore = 0;
  if(selectedFrameNumber === LAST_FRAME) {
    this.tenthFrameScoring(frames, selectedFrameNumber);
  }
  else if(frames[selectedFrameNumber -1].isAStrike()) {
    this.strikeScoring(frames, selectedFrameNumber);
  }
  else if(frames[selectedFrameNumber -1].isASpare()) {
    this.spareScoring(frames, selectedFrameNumber);
  }
  else {
    this.basicScoring(frames, selectedFrameNumber);
  }
  return finalFrameScore;
};


game.prototype.tenthFrameScoring = function(frames, selectedFrameNumber) {
  finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
};

game.prototype.strikeScoring = function(frames, selectedFrameNumber) {
  finalFrameScore = 0;
  if(selectedFrameNumber === frames.length - 1) {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore + frames[selectedFrameNumber]._secondScore;
  }
  else {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + this.frameScoreWithBonus(frames, selectedFrameNumber + 1);
  }
  if(finalFrameScore > 30) {
    finalFrameScore = 30;
  }
};
//
game.prototype.spareScoring = function(frames, selectedFrameNumber) {
  finalFrameScore = 0;
  if(selectedFrameNumber === frames.length - 1) {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore();
  }
  else {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore;
  }
};

game.prototype.basicScoring = function(frames, selectedFrameNumber) {
  finalFrameScore = 0;
  finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
};


game.prototype.gameScore = function(frames) {
  finalScore = 0;
  for (i = 1; i <= frames.length; i++) {
    finalScore += this.frameScoreWithBonus(frames, i);
  }
  return finalScore;
};
