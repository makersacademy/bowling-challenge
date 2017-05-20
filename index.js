$(document).ready(function () {
  var player = new Player();

  $('#roll_ball').click(function (clickEvent) {
    player.bowl(3);
    displayScore();
  });
});

function displayScore() {
  $('#score').text(player.score);
  $('#frames').text(player.frames);
}
