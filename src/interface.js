'use strict';

$( document ).ready(function(){

  var game = new Game();
  var frame = new Frame();
  var ai = new Ai();

  controller();
  updateFrame();

  function controller() {
    if ( game.over || ( game.isFrame() === 10 && frame.ball === 2 ) ) {
      $('#bowl').hide();
      $('#newFrame').hide();
      $('#newGame').show();
    } else if ( frame.over ) {
      $('#bowl').hide();
      $('#newFrame').show();
      $('#newGame').hide();
    } else {
      $('#bowl').show();
      $('#newFrame').hide();
      $('#newGame').hide();
    }
  }

  $('#bowl').on('click', function(){
    var pins = frame.bowl()
    recordScore(pins);
    updateScore(pins);
    console.log('Frame: ' + game.isFrame());
    console.log('Ball: ' + frame.ball);
    console.log('Score: ' + pins);
    console.log('Frame Score: ' + frame.currentScore);
    console.log('Frame over: ' + frame.over);
    controller();
  });

  $('#newFrame').on('click', function(){
    $('#score').text("Let's bowl!");
    frame = new Frame();
    updateFrame();
    controller();
  });

  $('#newGame').on('click', function(){
    location.reload()
    controller();
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
    $('#currentFrame').text('Frame: ' + ( game.isFrame() + 1 ) + '  |  ');
  }
});
