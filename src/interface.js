$(document).ready(function() {
  var game = new Game();
  updateDisplay();

  $('.pins .pin').click(function() {
    if (!game.complete()) {
      var text = parseInt($(this).text());
      game.bowlBall(text);
      updateDisplay();
    }
  })

  function updateButtons() {
    if (game.firstTurn === undefined) {
      $('.pin').removeClass('unavailable');
    } else {
      pinsToRemove = removeUnavailable()
      $.each(pinsToRemove, function(index, pins) {
        $('#button-'+ pins).addClass('unavailable');
      });
    }
  }

  function showStrike() {
    if ( game.strike() ) {
      var number = game.getFrameCount()
      $('#'+(number-1)+'.bottom').text("strike")
    }
  }

  function showSpare() {
    if ( game.spare() ) {
      var number = game.getFrameCount()
      $('#'+(number-1)+'.bottom').text("spare")
    }
  }

  function removeUnavailable() {
    num = 10 - (game.firstTurn - 1)
    var unavailable = [];
    for (var pin = num; pin <= 10; pin++) {
        unavailable.push(pin);
    }
    return unavailable
  }

  function updateDisplay() {
    updateButtons()
    updateScores()
    updateFrames()
    if (game.getFrameCount() > 1) {
      showStrike() 
      showSpare() 
    }
  }

  function updateScores() {
    $('#bonus').text(game.getBonusScore());
    $('#main').text(game.getScore());
    $('#total').text(game.getTotalScore());
  }

  function updateFrames() {
    var number = game.getFrameCount()
    $('#'+number+'.left').text(game.firstTurn)
    $('#'+(number-1)+'.right').text(game.secondTurn)
    $('#'+(number-1)+'.bottom').text(game.frameScore) 
  }
})