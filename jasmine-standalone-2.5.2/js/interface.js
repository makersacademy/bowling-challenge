$( document ).ready(function() {

  var game = new Game();

  updateScoreAndRoll();

  $( 'button' ).click(function() {
      var pins = parseInt(this.id)
      game.roll(pins);
      updateScoreAndRoll();
      hideNumbers(pins);
      // var hideThese = [pins];
      // var id = pins + 1;
  })

  function updateScoreAndRoll(){
    $( '#total-score' ).text( game.calculateScore() );
    $( '#frame-number' ).text( game.currentFrameIndex + 1 );
    $( '#roll-number' ).text( game._rollNumber() );
  }

  function hideNumbers(pins){
    if (game._rollNumber() === 2) {
      for (var id = 11 - pins; id < 11; id++) {
        $("#" + id).hide();
      }
    } else {
      $( 'button' ).show();
    }
  }





})
