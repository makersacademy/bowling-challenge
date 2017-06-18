'use-strict';

$( document ).ready(function(){

  var frame = new Frame();
  var game = new Game();

  $('#bowl').on('click', function(){
    var pins = frame.bowl()
    console.log(pins);
    console.log(frame.ball);
    recordScore(pins);
    updateScore(pins);
  });

  function updateScore(pins) {
    if ( frame.ball <= 2 ) {
      $('#currentScore').text('Your total points: ' + game.totalScore() );
      $('#score').text('You knocked down ' + pins + ' ' + _pinS(pins) );
    } else {
      $('#score').text('Frame Over!');
    }
  }

  function recordScore(pins) {
    game.recordScore(pins);
  }

  function _pinS(pins) {
    if (pins === 1) {
      return 'pin'
    } else {
      return 'pins'
    }
  }

});
