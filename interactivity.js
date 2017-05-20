$( document ).ready(function() {
  var frames = new Frames();
  var bowling = new Bowling(frames);

  $( '#bowl' ).click(function() {
    bowling.bowl();
    printStrike();
    displayFrames();
  });

  $( '#score' ).click(function() {
    displayScore();
  });

  $( '#reset-game' ).click(function() {
    bowling.resetPins();
    $( '#frames' ).text( "" );
    $( '#print-score' ).text( "" );
  });

  function displayFrames(){
    $( '#frames' ).text( bowling.frames._frames );
  }

  function displayScore(){
    $( '#print-score' ).text( bowling.finalScore());
  }

  function printStrike(){
    if(bowling.frames._isStrike === true)
      $( '#print-score' ).text( 'Strike! X');
    else
    $( '#print-score' ).text( "" );
  }

});
