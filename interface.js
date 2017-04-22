$(document).ready(function() {

  var game = new Game();

  updateFrame();
  startFrame();
  $('#game-over').hide();



  $('#roll').on('click', function() {
    // animateBall();
    game.roll();
    if(game.isFinished()) {
      game.updateAndStore()
      writeLog();
      updateFrame();
      endGame()
    }
    if(game._currentFrame.isFinished()) {
      endFrame()
    }
    updateFrame();
  });

  $('#new-frame').on('click', function() {
    game.updateAndStore()
    writeLog();
    updateFrame();
    startFrame();
  });


  function startFrame() {
    $('#roll').show();
    $('#this-is-how-it-rolls').show();
    $('#new-frame').hide();
    $('#frame-outcome').hide();
  }

  function endFrame() {
    $('#roll').hide();
    $('#this-is-how-it-rolls').hide();
    $('#new-frame').show();
    $('#frame-outcome').show();
    $('#bonus-feature').text(game._currentFrame.bonusFeature());
  }

  function updateFrame() {
    game._frames.forEach(function(frame) {
      $('#frame_' + frame.number()).text(frame.points());
    });
    $('#total-score').text(game.total());
    $('#this-frame-number').text(game._currentFrame.number());
    $('#this-frame-points').text(game._currentFrame.points());
    $('#this-frame-roll').text(game._currentFrame.currentRoll());
    $("#pins").attr("src", 'pins/' + game._currentFrame.pins() + '_pins.png');
  };

  function endGame() {
    $('#frame-10-points').text(game._lastFrame().points());
    $('#frame-10-bonus-feature').text(game._lastFrame().bonusFeature());
    $('#game-over').show();
    $('#frame-stats').hide();
    $('#controls').hide();
  }

  function writeLog() {
    var num = game._lastFrame().number();
    $('#game-stats').append('<p>frame ' + num + ': <span id="frame_' + num + '"></span></p>')
  }

  // function animateBall() {
  //   $('#ball').animate({
  //     left: '250px',
  //     bottom: '100px',
  //     height: '80px',
  //     width: '80px'
  //   }, 'slow', function () { $(this).removeAttr('style'); });
  // }

});
