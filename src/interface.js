$(document).ready(function() {
  var game = new Game();
  var calculator = new GameCalculator();

  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    $('#full-game').val('');
    $('#final-score').text('Total score: ' + calculator.score(gameArr));
  });

  $('#restart').click(function(){
    location.reload();
  });

  $('.roll-score').click(function(){
    game.roll = parseInt(this.value);
    game.addRollToFrame();
    game.frameCount < MAX_FRAMES - 1 ? displayFrames() : displayFrameTen();
    game.checkFramesAndRemainingPins()
    hideOrShowButtons()
    displayFrameTotals()
  });

  function displayFrames() {
    var frame = game.frames[game.frameCount];
    if (game.isStrike(frame)) {
      $(`#f${game.frameCount + 1} > .inner2`).text('X');
    } else if (game.isSpare(frame)) {
      $(`#f${game.frameCount + 1} > .inner1`).text(frame[roll1]);
      $(`#f${game.frameCount + 1} > .inner2`)
        .html('<strong><em>/</em></strong>');
    } else {
      $(`#f${game.frameCount + 1} > .inner1`).text(frame[roll1]);
      $(`#f${game.frameCount + 1} > .inner2`).text(frame[roll2]);
    }
  };

  function displayFrameTen() {
    var frame = game.frames[game.frameCount];
    for (var i = 0; i < frame.length; i ++) {
      if (frame[i] === 10) {
        $(`#f${game.frameCount + 1} > #f10-inner${i + 1}`).text('X');
      } else {
        $(`#f${game.frameCount + 1} > #f10-inner${i + 1}`).text(frame[i]);
      }
      if (game.isSpare(frame)) {
        $(`#f${game.frameCount + 1} > #f10-inner2`)
        .html('<strong><em>/</em></strong>');
      }
    }
  };

  function hideOrShowButtons() {
    for (var i = ALL_PINS; i > 0; i--) {
      $(`#roll${i}`).removeClass('hide');
      $(`#roll${i+game.remainingPins}`).addClass('hide');
    }
    if (game.frameCount === MAX_FRAMES) {
      $('.roll-score').addClass('hide');
    }
  };

  function displayFrameTotals() {
    for (var i = 1; i <= game.frames.length; i ++) {
      $(`#f${i} > .inner3 > span`)
      .text(game.flattenAndSum(game.frames.slice(0, i)));
    }
    $(`#f${game.frameCount} > #final-scorecard-score > span`)
      .text(game.flattenAndSum(game.frames));
  };
});
