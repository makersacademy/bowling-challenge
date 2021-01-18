$(document).ready(function() {
  var game = new Game();

  $('.User_Roll').change(function() {
    let pins = parseInt($('.User_Roll').val());
    displayPins(pins);
    game.roll(pins);
    frameResults();
    updateTotalScore();
    checkgameover();
    $('.User_Roll option').prop('selected', function(){
      return this.defaultSelected;
    })
  })

  $('#reset').click(function() {
    game = new Game();
    $('h2').text("");
    $('.frame_score').text("");
    $('#overall_score').text("");
  })

  function displayPins(pins) {
    $(`#f${game.frameCount()}r${game.rollCount()}`).text(pins);
    if (game.rollCount() === 1 && pins === 10) {
      $(`#f${game.frameCount()}r2`).text("X");
    } else if (game.rollCount() === 2 && parseInt($(`#f${game.frameCount()}r1`).text()) + pins === 10) {
      $(`#f${game.frameCount()}r2`).text("/");
    }
  }

  function updateTotalScore() {
    $('#overall_score').text(game.scorer.total());
  }

  function frameResults() {
    if (!game._isAtStart()) {
      for (let i = 0; i < game.scoreCount(); i++) {
        $(`#frame${i + 1}_score`).text(game.scorer.scores[i]);
      }
    }
  }

  function checkgameover() {
    if (game._isOver()) {
      $('#gameover').text("Game Over!")
    }
  }

})
