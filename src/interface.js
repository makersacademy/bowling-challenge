$(document).ready(function() {
  var player = new Player;

  $('#ballnumber').text(player.ball);

  $('#bowl').on('click', function() {
    player.bowl();
    $('#results').append(
      '<tr><td>' + (player.bowled)/2 + '</td><td>' + player.ball + '</td><td>' + player.ball1 + '</td><td>' + player.scoreCard.score + '</td></tr>');
      // '<tr><td>' + (player.bowled)/2 + '</td><td>' + player.ball + '</td><td>' + player.ball1 + '</td><td>' + player.scoredcard.score + '</td></tr>');
  });

});
// $('#ballnumber').text('ehllo');
