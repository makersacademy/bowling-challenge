function game() {

}

game.prototype.frameScoreWithBonus = function(frames, selectedFrameNumber) {
  finalFrameScore = 0;
  if(frames[selectedFrameNumber -1].isAStrike() && selectedFrameNumber === frames.length - 1) {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore + frames[selectedFrameNumber]._secondScore;
  }
  else if(frames[selectedFrameNumber -1].isASpare() && selectedFrameNumber === frames.length - 1) {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore;
  }
  else if(selectedFrameNumber === frames.length) {
    finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
  }
  else if(frames[selectedFrameNumber -1].isAStrike()) {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + this.frameScoreWithBonus(frames, selectedFrameNumber + 1);
  }
  else if(frames[selectedFrameNumber - 1 ].isASpare()) {
    finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore;
  }
  else {
    finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
  }
  return finalFrameScore;
};

game.prototype.gameScore = function(frames) {
  finalScore = 0;
  for (i = 1; i <= frames.length; i++) {
    finalScore += this.frameScoreWithBonus(frames, i);
  }
  return finalScore;
};
