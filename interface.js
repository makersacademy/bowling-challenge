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
    var i;
    for(i = 0; i < game.frames.length; i++) {
      $(`#frame-total-${i}`).text(game.frames[i].reportTotalScore());
      let frameScores = game.frames[i].rollText()
      $(`#frame-${i}-roll-0`).text(frameScores.firstRoll);
      $(`#frame-${i}-roll-1`).text(frameScores.secondRoll);
    }
    //game.render();
  });
});