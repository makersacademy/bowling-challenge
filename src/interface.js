'use-strict';

$( document ).ready(function(){

  var frame = new Frame();

  $('#bowl').on('click', function(){
    updateScore()
  });

  function updateScore() {
    var pins = frame.bowl()
    $('#score').text('You knocked down ' + pins + ' ' + _pinS(pins) );
    $('#currentScore').text('Your total points: ' + frame.currentScore );
  }

  function _pinS(pins) {
    if (pins === 1) {
      return 'pin'
    } else {
      return 'pins'
    }
  }

});
