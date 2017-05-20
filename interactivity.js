$( document ).ready(function() {
  var frames = new Frames();
  var bowling = new Bowling(frames);

  $( '#bowl' ).click(function() {
    bowling.bowl();
    displayFrames();
  });

  $( '#score' ).click(function() {
    bowling.finalScore();
    displayScore();
  });

  $( '#reset-game' ).click(function() {
    bowling.resetPins();
    $( '#frames' ).text( "" );
  });

  function displayFrames(){
    $( '#frames' ).text( bowling.frames._frames );
  }

  function displayScore(){
    $( '#frames' ).text( bowling.finalScore());
  }

});
