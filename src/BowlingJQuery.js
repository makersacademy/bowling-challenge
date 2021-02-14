$(document).ready( function() {
  let game = new Game()

  frameScores()

  $("#rolls-form").submit( function() {
    event.preventDefault();
    let roll = parseInt($("#input-roll").val());
    game.inputRoll(roll)

    frameScores()
  })


  function frameScores() {
    for ( i = 1; i < 11; i++) {
      $(`#score${i}`).text(game.cumulScores[`frame_${i}`]);
    }
  }


})
