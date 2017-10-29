// function game() {
//
// }
//
// game.prototype.frameScore = function(frames, selectedFrame) {
//   finalFrameScore = 0;
//   if(selectedFrame === frames.length) {
//     finalFrameScore += frames[selectedFrame].preBonusScore();
//   }
// };

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
