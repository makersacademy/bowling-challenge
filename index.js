$(document).ready(function () {

  $('#roll_ball').click(function (clickEvent) {
    player.bowl(3);
    displayScore();
  });
});

function displayScore() {
  $('#total_score').text(player.score);
  $('#frames').text(player.frames);
}
