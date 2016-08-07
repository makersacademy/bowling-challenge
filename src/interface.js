var game = new Game();

$( document ).ready(function() {
});

function getName(){
  var playerName = $('#player-name').val();
  $('#bowler').text(playerName);
};

$( "#bowl-frame" ).click(function(){
  game.bowlFrame();
  $('#total-score').text(game.totalScore);
});
