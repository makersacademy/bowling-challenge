var bowling = new BowlingGame();

$('#start_button').click(function() {
  $('#game').html(bowling.startFrame());
});

$('#roll_again_button').click(function(){
  $('#game').html(bowling.rollAgain(first));
});