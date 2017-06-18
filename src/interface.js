'use-strict';

$( document ).ready(function(){

  var frame = new Frame();

  $('#bowl').on('click', function(){
    console.log(frame.remainingPins);
    updateScore()
  });

  function updateScore() {
    if ( frame.ball < 2 ) {
      var pins = frame.bowl()
      $('#currentScore').text('Your total points: ' + frame.currentScore );
      $('#score').text('You knocked down ' + pins + ' ' + _pinS(pins) );
    } else {
      $('#score').text('Frame Over!');
    }
  }

  function _pinS(pins) {
    if (pins === 1) {
      return 'pin'
    } else {
      return 'pins'
    }
  }

});
