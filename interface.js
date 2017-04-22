$(document).ready(function() {

  var game = new Game();

  updateFrame();
  startFrame();
  $('.bonus-rolls-feature').hide();
  $('#game-over').hide();

  $('#roll').on('click', function() {
    game.roll();
    updateFrame();
    if(game.currentFrame().isFinished()) { checkGameStatus() }
  });

  function checkGameStatus() {
    if (game.frameNumber() >= 10) {
     game.endGame();
     log();
     endGame()
    } else {
      game.updateAndStore()
      endFrame()
    }
  }

  $('#bonus-roll-button').on('click', function() {
    game.roll();
    updateBonusRolls()
    if(game.currentFrame().isFinished()) {
      game.endGame()
      logBonusPoints()
      endGame()
    }
  });

  function logBonusPoints() {
    $('#game-stats').append('<p>bonus roll points: <span id="final-bonus"></span></p>')
    $('#final-bonus').text(game.currentFrame().points());
  }

  $('#new-frame').on('click', function() {
    log();
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
    updateFrameOver()
    $('#frame-over').show();
  }

  function updateFrameOver() {
    $('#last-frame-points').text(game.lastFrame().points());
    $('#bonus-feature').text(game.lastFrame().bonusFeature());
  }

  function updateFrame() {
    $('#this-frame-number').text(game.currentFrame().number());
    $('#this-frame-points').text(game.currentFrame().points());
    $('#this-frame-roll').text(game.currentFrame().currentRoll());
    $("#pins").attr("src", 'pins/' + game.currentFrame().pins() + '_pins.png');
  };

  function log() {
    writeLog()
    updateLog()
    $('#total-score').text(game.total());
  }

  function writeLog() {
    var num = game.lastFrame().number();
    $('#game-stats').append('<p>frame ' + num + ': <span id="frame_' + num + '"></span></p>')
  }


  function updateLog() {
    game._frames.forEach(function(frame) {
      $('#frame_' + frame.number()).text(frame.points());
    });
  }

  function endGame() {

    if(game.isFinished()) {
      updateLog()
      gameOver()
    } else {
      bonusRolls()
    }
  }

  function gameOver() {
    $('#bonus-rolls').hide();
    $('#frame-stats').hide();
    $('#game-over').show();
    $('#controls').hide();
  }

  function updateBonusRolls() {
    $('#bonus-rolls-points').text(game.currentFrame().points());
    $('#bonus-rolls-allowed').text(game.currentFrame().numberAllowed());
    $("#pins").attr("src", 'pins/' + game.currentFrame().pins() + '_pins.png');

  }

  function bonusRolls() {
    $('#frame-stats').hide();
    $("#pins").show();
    updateBonusRolls()
    $('.bonus-rolls-feature').show();
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
