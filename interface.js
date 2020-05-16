$( document ).ready(function() {
  console.log( "ready!" );

  let game = new Game(new FrameFactory(Frame, Roll));

  $('#score-input').submit(function(event) {
    event.preventDefault();
    let score = $('#current-score').val();
    $('#current-score').val('');
    console.log(score);
    game.getCurrentFrame().setCurrentRollScore(parseInt(score, 10));
    game.update();
    //$(`#frame-${game.currentFrameIndex}-roll-${game.getCurrentFrame().currentRollIndex}`).text(game.getCurrentRoll().getScore());
    var i;
    for(i = 0; i < game.frames.length; i++) {
      $(`#frame-total-${i}`).text(game.frames[i].basicTotalScore()); // => assign to total
      let frameScores = game.frames[i].rollText() // => this will return the formatting
      $(`#frame-${i}-roll-0`).text(frameScores.firstRoll);
      $(`#frame-${i}-roll-1`).text(frameScores.secondRoll);
    }
    //game.render();
  });
});