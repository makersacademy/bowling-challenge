/*global $:false, Game, Frame */

$(document).ready(function() {
  var game;
  var rollValue;

  game = new Game();

  $( 'input#rollButton ' ).click( function(event) { 
    event.preventDefault();
    rollValue = document.getElementById( 'rollValue' ).value;
    game.roll( parseInt(rollValue) );
    updateScore();
  });

  
  function updateScore() {

    game.frames.forEach( function( frame, index ) {   
      var i = frame.frameIndex + 1,
          roll1 = game.gameRolls[frame.rollIndex],
          roll2 = ''; 

      if(frame.isStrike()) { 
        roll1 = 'X';
      } else if( frame.isSpare() ) {
        roll2 = '/'; 
      } else if ( frame.isFinished()) {
        roll2 = game.gameRolls[frame.rollIndex + 1];
      }

      $( '#frame' + i + ' .roll1' ).text( roll1 );
      $( '#frame' + i + ' .roll2' ).text( roll2 );
      $( '#frame' + i + ' .frameScore' ).text( game.score(i) );
    });
  }
});
