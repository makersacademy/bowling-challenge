$( document ).ready(function() {

  var game = new Game();

  updateScoreAndRoll();

  $("button").mouseup(function(){
    $(this).blur();
  })

  $( 'button' ).click(function() {
      var pins = parseInt(this.id)
      game.roll(pins);
      updateScoreAndRoll();
      hideNumbers(pins);
      getRolls();
      gameOver();

  })

  function updateScoreAndRoll(){

    $( '#frame-number' ).text( game.currentFrameIndex + 1 );
    $( '#roll-number' ).text( game.rollNumber() );
  }

  function hideNumbers(pins){
    if (game.rollNumber() === 2 && pins !==10) {
      for (var id = 11 - pins; id < 11; id++) {
        $("#" + id).attr("disabled", true);
      }
    } else {
      $( 'button' ).attr("disabled", false);
    }
  }

  function getRolls() {
    for (var frame = 1; frame < 11; frame ++) {
      for (var roll = 1; roll < 3; roll++) {
        $( '#' + frame + '-' + roll ).text( game.getRoll(frame,roll) );
      }
      $( '#score' + frame ).text( game.getScore(frame) );
    }
    $('#10-2').text( game.getFinalBonus(2));
    $('#10-3').text( game.getFinalBonus(3));
  }

  function gameOver() {
    if (game.isOver()) {
      $( '#game-over' ).text( "Game Over!" );
      $( '#total-score' ).text( `Total score: ${game.getScore()}`);
      $( 'button' ).hide();
      $( '#frame-rolls-go' ).hide();
    }
  }



})
