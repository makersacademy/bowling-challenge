/*global $:false, Game, Frame */

$(document).ready(function() {
  var game;
  var rollValue;

  game = new Game();

  $( 'input#rollButton ' ).click( function() { 
    rollValue = document.getElementById( 'rollValue' ).value;
    game.roll( parseInt(rollValue) );
    updateScore();
    event.preventDefault();
  });

  
  function updateScore() {
    var rollResult = '<div id="frameNumber">1</div>' + 
                     '<div id="roll1">' + game.gameRolls + '</div>' +
                     '<div id="roll2"></div>' + 
                     '<div id="frameScore">' + game.score() + '</div>';
    $( '#frame1' ).html(rollResult);
    $( '#listScore' ).text( 'Score: ' + game.score() );

  }
});
