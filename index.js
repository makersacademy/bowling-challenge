$(document).ready(function () {

  $('#roll_ball').click(function (clickEvent) {
    player.bowl(3);
    displayScore();
  });
});

function displayScore() {
  $('#frame_score').text(player.frameScore);
  $('#total_score').text(player.score);
  $('#frames_left').text(player.frames);
}
