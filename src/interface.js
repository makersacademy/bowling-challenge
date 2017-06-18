'use-strict';

$( document ).ready(function(){

  var game = new Game();
  var frame = new Frame();

  updateFrame();

  $('#bowl').on('click', function(){
    if ( !game.over ) {
      var pins = frame.bowl()
      recordScore(pins);
      updateScore(pins);
      updateFrame();
      console.log('Frame: ' + game.isFrame());
      console.log('Ball: ' + frame.ball);
      console.log('Score: ' + pins);
      console.log('Total Score: ' + game.totalScore());
    }
  });

  function recordScore(pins) {
    if (pins === 10) {
      game.recordScore(0);
    }
    game.recordScore(pins);
  }

  function updateScore(pins) {
      $('#currentScore').text('Your total points: ' + game.totalScore() );
      $('#score').text('You knocked down ' + pins + ' ' + _pinS(pins) );
  }

  function _pinS(pins) {
    if (pins === 1) {
      return 'pin'
    } else {
      return 'pins'
    }
  }

  function updateFrame() {
    $('#currentFrame').text('Frame: ' + game.isFrame() + '  |  ');
  }

});
