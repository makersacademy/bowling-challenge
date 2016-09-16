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
  $('#' + (game.frameNumber - 1) + 'a').text(game.currentPins[0]);
  $('#' + (game.frameNumber - 1) + 'b').text(game.currentPins[1]);
  $('#' + (game.frameNumber - 1) + 'c').text(game.currentPins[2]);
});
