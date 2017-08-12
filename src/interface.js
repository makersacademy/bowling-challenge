$(document).ready(function() {
  var game;
  var calculator;
  var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.freesfx.co.uk/rx2/mp3s/2/13789_1459797859.mp3');

  $(window).on('load', function () {
    $('#show-scores').hide();
    $('#bonus-roll').hide();
  });

  $('#play-button').on('click', function() {
    game  = new Game();
    game.play();
    calculator = new ScoreCalculator(game.frames, game.bonuses);
    audioElement.play();
    showGame();
  });

  function showGame() {
    scoreTable();
    tenthFrame();
    specialScores();
    $('#show-scores').show();
    $('#total-score').text(calculator.totalScore());
  }

  function scoreTable() {
    $('#score-table tr').each(function(i) {
      var row = this;
      var frame = (game.frames[i-1]);
      $(row).find('#frame-no').text(i);
      if (frame) {
        rolls(frame, row);
        bonuses(frame, row);
        total(frame, row);
      }
    });
  }

  function rolls(frame, row) {
    $(row).find('#first-roll').text(frame._roll1);
    if (!frame.isStrike()) {
      $(row).find('#second-roll').text(frame._roll2);
    } else {
      $(row).find('#second-roll').text("");
    }
  }

  function bonuses(frame, row) {
    if (frame.bonusType()) {
      $(row).find('#bonus').text(frame.bonusType());
    } else {
      $(row).find('#bonus').text("");
    }
  }

  function total(frame, row) {
    if (frame.bonusType()) {
      $(row).find('#total').text(frame.getScore() + bonusTotal(frame));
    } else {
      $(row).find('#total').text(frame.getScore());
    }
  }

  function bonusTotal(frame) {
    var total;
    calculator.bonuses.forEach(function(bonus) {
      if (bonus.getFrameIndex() === frame.frameIndex + 1) {
        total = calculator.singleBonusScore(bonus);
      }
    });
    return total;
  }

  function tenthFrame(row) {
    var tenth = game.frames[9];
    if (tenth.bonusType()) {
      $('#tenth').find('#total').text(tenth.getScore() + game.frames[10].getScore());
      showBonusRow();
    } else {
      $('#bonus-roll').hide();
    }
  }

  function showBonusRow() {
    $('#bonus-roll').find('#frame-no').text("Bonus rolls");
    $('#bonus-roll').find('#bonus').text("");
    $('#bonus-roll').find('#total').text("");
    $('#bonus-roll').show();
  }

  function specialScores() {
    if (game.isPerfect()) {
      $('#special-score').text("PERFECT GAME!");
    } else if (game.isGutter()) {
      $('#special-score').text("GUTTER GAME!");
    }
  }
});
