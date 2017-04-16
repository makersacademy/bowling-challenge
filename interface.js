$(document).ready(function() {

  var game = new Game();

  updateAll();
  startFrame();
  $('#game-over').hide();



  $('#roll').on('click', function() {
    $('#ball').animate({
      left: '250px',
      bottom: '100px',
      height: '80px',
      width: '80px'
    }, 'slow', function () { $(this).removeAttr('style'); });
    game.roll();
    if(game.isFinished()) {
      game.updateAndStore()
      var num = game._lastFrame().number();
      $('#game-stats').append('<p>frame ' + num + ': <span id="frame_' + num + '"></span></p>')
      updateAll();
      endGame()
    }
    if(game._currentFrame.isFinished()) {
      endFrame()
    }
    updateAll();
  });

  $('#new-frame').on('click', function() {
    game.updateAndStore()
    var num = game._lastFrame().number();
    $('#game-stats').append('<p>frame ' + num + ': <span id="frame_' + num + '"></span></p>')
    updateAll();
    startFrame();
  });


  function startFrame() {
    $('#roll').show();
    $('#new-frame').hide();
    $('#frame-outcome').hide();
  }

  function endFrame() {
    $('#roll').hide();
    $('#new-frame').show();
    $('#frame-outcome').show();
    $('#bonus-feature').text(game._currentFrame.bonusFeature());
  }

  function updateAll() {
    game._frames.forEach(function(frame) {
      $('#frame_' + frame.number()).text(frame.points());
    });
    $('#total-score').text(game.total());
    $('#this-frame-number').text(game._currentFrame.number());
    $('#this-frame-points').text(game._currentFrame.points());
    $('#this-frame-roll').text(game._currentFrame.currentRoll());
    $("#pins").attr("src", 'pins/' + game._currentFrame.pins() + '_pins.jpeg');
  };

  function endGame() {
    $('#game-over').show();
    $('#frame-stats').hide();
    $('#controls').hide();
  }

});
