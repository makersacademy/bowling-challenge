$(document).ready(function() {
  var game = new Game();
  var calculator = new GameCalculator();
  var frameCount = 0;
  var frames = [];
  var roll;
  var remainingPins;

  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    $('#full-game').val('');
    $('#final-score').text('Total score: ' + calculator.score(gameArr));
  });

  $('#restart').click(function(){
    location.reload();
  });

  $('.roll-score').click(function(){
    roll = parseInt(this.value);
    console.log(frames);
    if (frameCount < MAX_FRAMES - 1) {
      game.addRollToFrame(frames, frameCount, roll);
      displayNormalFrame(frames[frameCount]);
      frameCount = game.completeFrameCheck(frames, frameCount);
    } else {
      game.addRollToFrame(frames, frameCount, roll);
      displayFrameTen(frames[frameCount]);
      frames = game.bonusChecker(frames);
      frameCount = game.frameTenCheck(frames, frameCount);
      $(`#f${frameCount} > #final-scorecard-score > span`)
        .text(game.flattenAndSum(frames));
    }

    remainingPins = game.remainingPins(frames[frameCount]);

    for (var i = ALL_PINS; i > 0; i--) {
      $(`#roll${i}`).removeClass('hide');
      $(`#roll${i+remainingPins}`).addClass('hide');
    }

    if (frameCount === MAX_FRAMES) {
      $('.roll-score').addClass('hide');
    }

    for (var i = 1; i <= frames.length; i ++) {
      $(`#f${i} > .inner3 > span`).text(game.flattenAndSum(frames.slice(0, i)));
    }

    function displayNormalFrame() {
      if (game.isStrike(frames[frameCount])) {
        $(`#f${frameCount + 1} > .inner2`).text('X');
      } else if (game.isSpare(frames[frameCount])) {
        $(`#f${frameCount + 1} > .inner1`).text(frames[frameCount][roll1]);
        $(`#f${frameCount + 1} > .inner2`).html('<strong><em>/</em></strong>');
      } else {
        $(`#f${frameCount + 1} > .inner1`).text(frames[frameCount][roll1]);
        $(`#f${frameCount + 1} > .inner2`).text(frames[frameCount][roll2]);
      }
    }

    function displayFrameTen(frame) {
      for (var i = 0; i < frame.length; i ++) {
        if (frame[i] === 10) {
          $(`#f${frameCount + 1} > #f10-inner${i + 1}`).text('X');
        } else {
          $(`#f${frameCount + 1} > #f10-inner${i + 1}`).text(frame[i]);
        }
        if (game.isSpare(frame)) {
          $(`#f${frameCount + 1} > #f10-inner2`).text('/');
        }
      }
    }
  });
});
