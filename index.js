$(document).ready(function () {

  $('#roll_frame').click(function (clickEvent) {
    player.bowl(Math.floor((Math.random() * 11) + 1));
    displayScore();
  });
});

function displayScore() {
  $('#roll1').text(player.roll1Score);
  $('#roll2').text(player.roll2Score);
  $('#frame_score').text(player.frameScore);
  $('#total_score').text(player.score);
  $('#frames_left').text(player.frames);
}
