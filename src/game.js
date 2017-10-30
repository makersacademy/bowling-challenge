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


// won't work for the 10th roll

// will need to deal with rolls 10 edge case later.
// Maybe by creating a 10th frame which behaves differently
// maybe by adding thirdScore and fourth score functionality
// to frames which default as null

// game.prototype.totalScore = {
//
// };

// def frame_score(frames, selected_frame)
//   final_frame_score = 0
//   if selected_frame == frames.length
//     final_frame_score += frames[selected_frame - 1].inject(:+)
//   elsif frames[selected_frame[0]] == 10 # is a strike
//     final_frame_score = frames[selected_frame-1].inject(:+) + frame_score(frames, selected_frame+1)
//   elsif frames[selected_frame - 1].inject(:+) == 10 #spares
//     final_frame_score = frames[selected_frame - 1].inject(:+) + frames[selected_frame][0]
//   else #normal scoring
//     final_frame_score += frames[selected_frame - 1].inject(:+)
//   end
//   final_frame_score
// end
