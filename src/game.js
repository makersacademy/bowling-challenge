function game() {

}

LAST_FRAME = 10;

game.prototype.frameScoreWithBonus = function(frames, selectedFrameNumber) {
  // start with last frame catch condition
  if(selectedFrameNumber === LAST_FRAME) return this.tenthFrameScoring(frames, selectedFrameNumber);
  if(frames[selectedFrameNumber -1].isAStrike()) return this.strikeScoring(frames, selectedFrameNumber);
  if(frames[selectedFrameNumber -1].isASpare()) return this.spareScoring(frames, selectedFrameNumber);
  return this.basicScoring(frames, selectedFrameNumber);
};


game.prototype.tenthFrameScoring = function(frames, selectedFrameNumber) {
  return frames[selectedFrameNumber - 1].preBonusScore();
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
  return finalFrameScore;
};

game.prototype.spareScoring = function(frames, selectedFrameNumber) {
  return frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore;
};

game.prototype.basicScoring = function(frames, selectedFrameNumber) {
  return frames[selectedFrameNumber - 1].preBonusScore();
};


game.prototype.gameScore = function(frames) {
  finalScore = 0;
  for (i = 1; i <= frames.length; i++) {
    finalScore += this.frameScoreWithBonus(frames, i);
  }
  return finalScore;
};
