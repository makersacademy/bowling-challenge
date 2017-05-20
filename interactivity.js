$( document ).ready(function() {
  var frames = new Frames();
  var bowling = new Bowling(frames);

  $( '#bowl' ).click(function() {
    bowling.bowl();
    printStrike();
    displayFrames();
  });

  $( '#score' ).click(function() {
    displayFinalScore();
  });

  $( '#reset-game' ).click(function() {
    bowling.resetPins();
    $( '#frames' ).text( "" );
    $( '#print-final-score' ).text( "" );
  });

  function displayFrames(){
    $( '#frames' ).text( bowling.frames._frames );
  }

  function displayFinalScore(){
    $( '#print-final-score' ).text( bowling.finalScore());
  }

  function printStrike(){
    if(bowling.frames._isStrike === true)
      $( '#print-final-score' ).text( 'Strike! X');
    else
    $( '#print-final-score' ).text( "" );
  }

});
