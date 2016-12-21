$( document ).ready(function() {

  var game = new Game();

  updateScoreAndRoll();

  $( 'button' ).click(function() {
      var pins = parseInt(this.id)
      game.roll(pins);
      updateScoreAndRoll();
      hideNumbers(pins);
      getRolls();

  })

  function updateScoreAndRoll(){
    $( '#total-score' ).text( game.calculateScore() );
    $( '#frame-number' ).text( game.currentFrameIndex + 1 );
    $( '#roll-number' ).text( game._rollNumber() );
  }

  function hideNumbers(pins){
    // if (game._rollNumber() === 2) {
    //   for (var id = 11 - pins; id < 11; id++) {
    //     $("#" + id).hide();
    //   }
    // } else {
    //   $( 'button' ).show();
    // }
  }

  function getRolls() {
    for (var frame = 1; frame < 11; frame ++) {
      for (var roll = 1; roll < 3; roll++) {
        $( '#' + frame + '-' + roll ).text( game.getRoll(frame,roll) );
      }
      $( '#score' + frame ).text( game.getFrameScore(frame) );
    }
    $('#10-2').text( game.getFinalBonus(2));
    $('#10-3').text( game.getFinalBonus(3));
  }





})
