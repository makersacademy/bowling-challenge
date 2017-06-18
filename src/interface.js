'use-strict';

$( document ).ready(function(){

  var game = new Game();

  $('#bowl').on('click', function(){
    var frame = new Frame();
    var pins = frame.bowl()
    recordScore(pins);
    updateScore(pins);
    updateFrame();
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
