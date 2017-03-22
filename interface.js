$(document).ready(function() {
  var bowling = new Bowling();
  screenUpdate();

  $('#hit').on('click', function() {
    if($('#pins').val().length > 0) {
      var pinsHit = parseInt($('#pins').val());
      bowling.hit(pinsHit);
      screenUpdate();
    }
  });

  function screenUpdate() {
    $('#current-turn').text(bowling.currentTurn());
    $('#current-ball').text(bowling.currentBall()+1);
    $('#current-score').text(bowling.score());
    $('#score-sheet').text(bowling._scoreSheet);
    if(bowling.gameOver() === true) {
      $('#game-status').text("Game Over");
      $('#input').remove();
    }
  }
});
