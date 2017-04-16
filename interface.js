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
    }, 'slow');
    game.roll();
    if(game._currentFrame.isFinished() && game.isFinalFrame()) {
      game.updateAndStore()
      endGame()
    }
    if(game._currentFrame.isFinished()) {
      endFrame()
    }
    updateAll();
  });

  $('#new-frame').on('click', function() {
    game._storeFrame()
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
    $('#total-score').text(game.total());
    $('#this-frame-number').text(game._currentFrame.number());
    $('#this-frame-points').text(game._currentFrame.points());
    $('#this-frame-roll').text(game._currentFrame.currentRoll());
    // $('#this-frame-pins').text(game._currentFrame.pins());
    $("#pins").attr("src", 'pins/' + game._currentFrame.pins() + '_pins.jpeg');
  };

  function endGame() {
    $('#game-over').show();
    $('#frame-stats').hide();
    $('#controls').hide();

  }

});
