$( document ).ready(function() {
  var frames = new Frames();
  var bowling = new Bowling(frames);

  $( '#bowl' ).click(function() {
    if(bowling.frames._frameCounter == bowling.FRAME_COUNT_LIMIT)
      $( '#print-running-total' ).text( 'Game over! Final score is ' + bowling.finalScore() );
      displayFrames();

    bowling.bowl();
    printStrike();
    displayFrames();
    runningTotal();
  });

  $( '#reset-game' ).click(function() {
    bowling.resetPins();
    $( '#frames' ).text( '' );
    $( '#print-final-score' ).text( '' );
    $( '#print-running-total' ).text( '' );
  });

  function displayFrames(){
    $( '#frames' ).text( bowling.frames._frames );
  }

  function displayFinalScore(){
    if(bowling.finalScore() === 0)
      $( '#print-final-score' ).text( 'Gutter game! Better luck next time...');
    else
    $( '#print-final-score' ).text('Final score is ' + bowling.finalScore() + '!' );

  }

  function printStrike(){
    if(bowling.frames._isStrike === true)
      $( '#print-final-score' ).text( 'Strike! X');
    else if(bowling.frames._isSpare === true)
      $( '#print-final-score' ).text( 'Spare! /' );
    else
      $( '#print-final-score' ).text( '' );
  }

  function runningTotal(){
    $( '#print-running-total' ).text('Running total: ' + bowling.finalScore());
  }

});
