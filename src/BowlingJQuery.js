$(document).ready( function() {
  let game = new Game()

  frameScores()

  $("#rolls-form").submit( function() {
    event.preventDefault();
    let roll = parseInt($("#input-roll").val());
    game.inputRoll(roll)
    console.log(roll)
    console.log(game.scores)
    console.log(game.frames)

    frameScores()
  })


  function frameScores() {
    for ( i = 1; i < 11; i++) {
      $(`#score${i}`).text(game.scores[`frame_${i}`]);
    }
  }


})
