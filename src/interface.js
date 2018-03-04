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

    if (frameCount < 9) {
      game.addRollToFrame(frames, frameCount, roll);
      if (game.isStrike(frames[frameCount])) {
        $(`#f${frameCount + 1} > .inner2`).text('X');
      } else if (game.isSpare(frames[frameCount])) {
        $(`#f${frameCount + 1} > .inner1`).text(frames[frameCount][0]);
        $(`#f${frameCount + 1} > .inner2`).text('/');
      } else {
        $(`#f${frameCount + 1} > .inner1`).text(frames[frameCount][0]);
        $(`#f${frameCount + 1} > .inner2`).text(frames[frameCount][1]);
      }
      frameCount = game.completeFrameCheck(frames, frameCount);
    } else {
      game.addRollToFrame(frames, frameCount, roll)
      for (var i = 0; i < frames[frameCount].length; i ++) {
        if (frames[frameCount][i] === 10) {
          $(`#f${frameCount + 1} > #f10-inner${i + 1}`).text('X');
        } else {
          $(`#f${frameCount + 1} > #f10-inner${i + 1}`).text(frames[frameCount][i]);
        }
        if (game.isSpare(frames[frameCount])) {
          $(`#f${frameCount + 1} > #f10-inner2`).text('/');
        }
      }
      frames = game.bonusChecker(frames);
      frameCount = game.frameTenCheck(frames, frameCount);
      $(`#f${frameCount} > #final-scorecard-score > span`).text(game.flattenAndSum(frames));

      console.log(frameCount);
    }

    if (frameCount === 10) {
      $('.roll-score').addClass('hide');
    }
    if (frames[frameCount]) {
      remainingPins = game.remainingPins(frames[frameCount]);
    } else {
      remainingPins = 10;
    }


    for (var i = 10; i > 0; i--) {
      $(`#roll${i}`).removeClass('hide');
      $(`#roll${i+remainingPins}`).addClass('hide');
    }

    for (var i = 1; i <= frames.length; i ++) {
      $(`#f${i} > .inner3 > span`).text(game.flattenAndSum(frames.slice(0, i)));
    }
  });
});
