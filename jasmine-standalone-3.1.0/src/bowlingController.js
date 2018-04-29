var bowl = new Bowling();

function updateScore() {
  frame_score = bowl.currentFrameScore;
  document.getElementById('current_frame_score').value = frame_score;

}

function countScore (score) {
  score = parseInt(score);
  bowl.countScore(score);
}

function updateFrame() {
  current_frame = bowl.frameCount;
  document.getElementById('frame').value = current_frame;
}
