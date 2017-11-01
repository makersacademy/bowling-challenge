function game() {

}

// game.prototype.frameScoreWithBonus = function(frames, selectedFrameNumber) {
//   finalFrameScore = 0;
//   if(frames[selectedFrameNumber -1].isAStrike() && selectedFrameNumber === frames.length - 1) {
//     finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore + frames[selectedFrameNumber]._secondScore;
//   }
//   else if(frames[selectedFrameNumber -1].isASpare() && selectedFrameNumber === frames.length - 1) {
//     finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore();
//     // dont need to add first frame net score here bc there is no next frame
//   }
//   else if(selectedFrameNumber === frames.length) {
//     finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
//   }
//   // catch condition for if you get a strike on the last frame
//   else if(frames[selectedFrameNumber -1].isAStrike()) {
//     finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + this.frameScoreWithBonus(frames, selectedFrameNumber + 1);
//     if(finalFrameScore > 30) {
//       finalFrameScore = 30;
//     }
//   }
//   else if(frames[selectedFrameNumber - 1 ].isASpare()) {
//     finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore;
//   }
//   else {
//     finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
//   }
//   return finalFrameScore;
// };

game.prototype.frameScoreWithBonus = function(frames, selectedFrameNumber) {
  // start with last frame catch condition
    finalFrameScore = 0;
  if(selectedFrameNumber === frames.length) {
    finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
  }
  else if(frames[selectedFrameNumber -1].isAStrike()) {
    if(selectedFrameNumber === frames.length - 1) {
      finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore + frames[selectedFrameNumber]._secondScore;
    }
    else {
      finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + this.frameScoreWithBonus(frames, selectedFrameNumber + 1);
    }
    if(finalFrameScore > 30) {
      finalFrameScore = 30;
    }
  }
  else if(frames[selectedFrameNumber -1].isASpare()) {
    if(selectedFrameNumber === frames.length - 1) {
      finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore();
    }
    else {
      finalFrameScore = frames[selectedFrameNumber - 1].preBonusScore() + frames[selectedFrameNumber]._firstScore;
    }
  }
  else {
    finalFrameScore += frames[selectedFrameNumber - 1].preBonusScore();
  }
  return finalFrameScore;
};
//
// game.prototype.strikeScoring = function() {
//
// }
//
// game.prototype.spareScoring = function() {
//
// }
//
// game.prototype.basicScoring = function() {
//
// }

// game.prototype.selectedStrikeFrame = function(selectedFrameNumber) {
//   frames[selectedFrameNumber -1].isAStrike();
// };

game.prototype.gameScore = function(frames) {
  finalScore = 0;
  for (i = 1; i <= frames.length; i++) {
    finalScore += this.frameScoreWithBonus(frames, i);
  }
  return finalScore;
};
