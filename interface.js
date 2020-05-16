$( document ).ready(function() {
  console.log( "ready!" );

  let game = new Game(new FrameFactory(Frame, Roll));

  $('#score-input').submit(function(event) {
    event.preventDefault();
    let score = $('#current-score').val();
    $('#current-score').val('');
    console.log(score);
    game.getCurrentFrame().setCurrentRollScore(score);
    $(`#frame-${game.currentFrameIndex}-roll-${game.getCurrentFrame().currentRollIndex}`).text(game.getCurrentRoll().getScore());
    game.update();
  });
});