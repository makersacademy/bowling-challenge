$(document).ready(function() {
  var player = new Player;

  $('#ballnumber').text(player.ball);

  $('#bowl').on('click', function() {
  if (player.bowled == 20 && player.ball == 1) {
    alert( 'You have finished your game!' );
  }else{
      var score;
      player.bowl();
      player.finishTurn();
      if (player.ball === 1){
        score = player.ball1;
      }else{
        score = player.ball2;
      };
      $('#results').append(
        '<tr><td>' + player.frame + '</td><td>' + player.ball + '</td><td>' + score + '</td><td>' + player.scoreCard.total + '</td></tr>');
      player.calcSparesAndStrikes();
      player.switchBall();
      player.updateFrame();
    };
  });

});
// $('#ballnumber').text('ehllo');
