$(document).ready(function() {
  var player = new Player;

  function updateBallNumber() {
    $('#ballnumber').text(player.ball);
  };

  updateBallNumber();
  $('#bowl').on('click', function() {
  if (player.bowled >= 20 && player.ball == 1) {
    if (player.hasStrike == true || player.hasSpare == true){
      player.tenthFrame();
      $('#results').append(
        '<tr><td>' + player.frame + '</td><td>' + player.ball + '</td><td>' + player.ball3 + '</td><td>' + player.scoreCard.total + '</td></tr>');
        player.hasSpare = false;
        player.hasStrike = false;
    }else{
      alert ( 'You have finished your game!' );
    };
  }else{
      player.updateFrame();
      player.bowl();
      player.finishTurn();
      $('#results').append(
        '<tr><td>' + player.frame + '</td><td>' + player.ball + '</td><td>' + player.currentPins + '</td><td>' + player.scoreCard.total + '</td></tr>');
      player.calcSparesAndStrikes();
      player.switchBall();
    };
    updateBallNumber();
  });

});
