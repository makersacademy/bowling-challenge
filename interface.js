$(document).ready(function() {

  var game = new Game();

  updateFrame();
  startFrame();
  $('#bonus-rolls').hide();
  $('#bonus-roll-button').hide();
  $('#game-over').hide();

  $('#roll').on('click', function() {
    // animateBall();
    game.roll();
    updateFrame();
    if(game._currentFrame.isFinished() && game._frame >= 10) {
     game._endGame()
     writeLog();
     updateLog();
     endGame()
    } else if (game._currentFrame.isFinished()) {
      game.updateAndStore()
      endFrame()
    }
  });

  $('#bonus-roll-button').on('click', function() {
    game.roll();
    updateBonusRolls()
    if(game._currentFrame.isFinished()) {
      game._endGame()
      $('#game-stats').append('<p>bonus roll points: <span id="final-bonus"></span></p>')
      $('#final-bonus').text(game._currentFrame.points());
      endGame()
    }
  });

  $('#new-frame').on('click', function() {
    writeLog();
    updateLog();
    updateFrame();
    startFrame();
  });


  function startFrame() {
    $('#frame-over').hide();
    $('#frame-stats').show();
    $('#new-frame').hide();
    $('#roll').show();
  }

  function endFrame() {
    $('#roll').hide();
    $('#new-frame').show();
    $('#frame-stats').hide();
    $('#last-frame-points').text(game._lastFrame().points());
    $('#bonus-feature').text(game._lastFrame().bonusFeature());
    $('#frame-over').show();
  }

  function updateFrame() {
    $('#this-frame-number').text(game._currentFrame.number());
    $('#this-frame-points').text(game._currentFrame.points());
    $('#this-frame-roll').text(game._currentFrame.currentRoll());
    $("#pins").attr("src", 'pins/' + game._currentFrame.pins() + '_pins.png');
  };

  function writeLog() {
    var num = game._lastFrame().number();
    $('#game-stats').append('<p>frame ' + num + ': <span id="frame_' + num + '"></span></p>')
  }


  function updateLog() {
    $('#total-score').text(game.total());
    game._frames.forEach(function(frame) {
      $('#frame_' + frame.number()).text(frame.points());
    });
  }

  function endGame() {

    if(game.isFinished()) {
      updateLog()
      $('#bonus-rolls').hide();
      $('#frame-stats').hide();
      $('#game-over').show();
      $('#controls').hide();
    } else {
      bonusRolls()
    }
  }

  function updateBonusRolls() {
    $('#bonus-rolls-points').text(game._currentFrame.points());
    $('#bonus-rolls-allowed').text(game._currentFrame._numberAllowed);
    $("#pins").attr("src", 'pins/' + game._currentFrame.pins() + '_pins.png');

  }

  function bonusRolls() {
    $('#frame-stats').hide();
    $("#pins").show();
    updateBonusRolls()
    $('#bonus-rolls').show();
    $('#bonus-roll-button').show();
    $('#roll').hide();
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
