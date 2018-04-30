var bowl = new Bowling();

function updateScore() {
  frame_score = bowl.currentFrameScore;
  note = bowl.note;
  document.getElementById('current_frame_score').value = frame_score;
  document.getElementById('note').value = note;
  document.getElementById('total').value = bowl.totalScore;

}

function countScore (score) {
  score = parseInt(score);
  bowl.countScore(score);

}

function updateFrame() {
  current_frame = bowl.frameCount;
  current_roll = bowl.frameRoll;
  document.getElementById('frame').value = current_frame;
  document.getElementById('roll_number').value = current_roll;
}
