/*global $:false, Game, Frame */

$(document).ready(function() {
  var game;
  var rollValue;

  game = new Game();

  drawButtons();

  $( '.btn' ).click( function(event) {
    console.log('button clicked');
    event.preventDefault();
    rollValue = $(this).attr('data-value');
    console.log('rollValue= ' + rollValue)
    game.roll( parseInt(rollValue) );
    updateScore();
    drawButtons();
  })

  function drawButtons() {
    var i,
        btn,
        numButtons;

    numButtons = 10 - game.currentFrame().pins;
    $( '#buttonList' ).empty();
    console.log(numButtons);
    for( i = 0; i <= numButtons; i++ ) {
      btn  = "<button id='btn" + i + "' type='button' class='btn' " + 
        "data-value='" + i + "'>" + i + "</button>";
      $( '#buttonList' ).append(btn);
      console.log('drawing button ' + i);
    }
    console.log('drawing buttons done!;');
  }

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

      $( '#frame' + i + ' .roll1' ).html('<p>' +  roll1 + '</p>');
      $( '#frame' + i + ' .roll2' ).html('<p>' +  roll2 + '</p>');
      $( '#frame' + i + ' .frameScore' ).html('<p>' +  game.score(i) + '</p>' );
    });
  }
});
