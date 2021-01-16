'use strict;'

class Score {

  calculateFrameScore(frame) {
    return frame.reduce((a,b) => a + b, 0);
  }

  calculateTotalScore(frameScores) {
    return frameScores.reduce((a,b) => a +b, 0);
  }

}