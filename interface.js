$(document).ready(function(){
  var game;
  $('#enter-name').on('submit', (function(event) {
    event.preventDefault();
    var name = $('#submit-name').val();
    game = new Game(name);
    $('#player-name').text(game.player);
    $('#play-game').addClass('game-on');
    $('#play-game').text('Bowl!');
    $('#enter-name').text("");
  }));

  $('#play-game').on('click', function(){
    game.bowl();
    var small_score = '#score-frame'+game.turn+'-roll'+game.roll
    $(small_score).text(game.lastScore());
    for (var i = 0; i<game.turn; i++){
      var frame_score = "#score-frame"+(i);
      $(frame_score).text(game.frameScore(i));
    };
    $('#game-result').text(game.result());
    $('#total-score').text(game.total());
  });
});
