$(document).ready(function() {
  var game = new Game();
  var calculator = new GameCalculator();

  createScoreCardAndButtonsHTML();

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
    game.completedFramesCount < MAX_FRAMES - 1 ? displayFrames() : displayFrameTen();
    game.checkFramesAndRemainingPins();
    hideOrShowButtons();
    displayFrameTotals();
  });

  function createScoreCardAndButtonsHTML() {
    for (var i = 0; i < 11; i++) {
      $('.roll-buttons').append(
        `<button class="roll-score" id="roll${i}" value="${i}">${i}</button>`
      )}

    for (var i = 9; i > 0; i--) {
    $('.scorecard').prepend(`<div class="scorecard-box" id="f${i}">
      <div class="header">Frame ${i}</div>
      <div class="inner1"></div>
      <div class="inner2"></div>
      <div class="inner3"><span></span></div>
      <span></span>
    </div>`)}
  }

  function displayFrames() {
    var frame = game.frames[game.completedFramesCount];
    if (game.isStrike(frame)) {
      $(`#f${game.completedFramesCount + 1} > .inner2`).text('X');
    } else if (game.isSpare(frame)) {
      $(`#f${game.completedFramesCount + 1} > .inner1`).text(frame[roll1]);
      $(`#f${game.completedFramesCount + 1} > .inner2`)
        .html('<strong><em>/</em></strong>');
    } else {
      $(`#f${game.completedFramesCount + 1} > .inner1`).text(frame[roll1]);
      $(`#f${game.completedFramesCount + 1} > .inner2`).text(frame[roll2]);
    }
  };

  function displayFrameTen() {
    var frame = game.frames[game.completedFramesCount];
    for (var i = 0; i < frame.length; i ++) {
      if (frame[i] === 10) {
        $(`#f${game.completedFramesCount + 1} > #f10-inner${i + 1}`).text('X');
      } else {
        $(`#f${game.completedFramesCount + 1} > #f10-inner${i + 1}`).text(frame[i]);
      }
      if (game.isSpare(frame)) {
        $(`#f${game.completedFramesCount + 1} > #f10-inner2`)
        .html('<strong><em>/</em></strong>');
      }
    }
  };

  function hideOrShowButtons() {
    for (var i = ALL_PINS; i > 0; i--) {
      $(`#roll${i}`).removeClass('hide');
      $(`#roll${i+game.remainingPins}`).addClass('hide');
    }
    if (game.completedFramesCount === MAX_FRAMES) {
      $('.roll-score').addClass('hide');
    }
  };

  function displayFrameTotals() {
    console.log(game.frames);
    for (var i = 1; i <= game.frames.length; i ++) {
      $(`#f${i} > .inner3 > span`)
      .text(game.flattenAndSum(game.frames.slice(0, i)));
    }
    $(`#f${game.completedFramesCount} > #final-scorecard-score > span`)
      .text(game.flattenAndSum(game.frames));
  };
});
