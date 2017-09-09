$(document).ready(function() {
  var player = new Player;

  function updateBallNumber() {
    $('#ballnumber').text(player.ball);
  };

  updateBallNumber();
  $('#numberofpins').on('submit', function(e) {
    e.preventDefault();
    var pins = $('#numberofpins').find('input[name="pins"]').val();
    player.updateFrame();
    player.bowl(pins);
    player.finishBall();
    console.log(player.ball);
    console.log(player.hasSpare);
    $('#results').append(
      '<tr><td>' + player.frame + '</td><td>' + player.ball + '</td><td>' + player.currentPins + '</td><td>' + player.scoreCard.total + '</td></tr>');
    player.calcSparesAndStrikes();
    player.resetBalls();
    player.switchBall();
    updateBallNumber();
  });


});
