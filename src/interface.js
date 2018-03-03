$(document).ready(function() {
  var game = new Game();
  var calculator = new GameCalculator();
  var frameCount = 0;
  var frames = [];
  var roll;

  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    console.log(gameArr);
    $('#full-game').val('');
    $('#final-score').text('Total score: ' + calculator.score(gameArr));
  });

  $('#restart').click(function(){
    console.log('restart clicked')
    location.reload();
  });

  $('.roll-score').click(function(){
    for (var i = 1; i <= frames.length; i ++) {
      $(`#f${i} > span`).text(game.flattenAndSum(frames.slice(0, i)));
    }
    roll = parseInt(this.id);

    if (frameCount < 9) {
      game.addRollToFrame(frames, frameCount, roll);
      $(`#f${frameCount + 1} > .inner`).text(frames[frameCount]);
      frameCount = game.completeFrameCheck(frames, frameCount);
    } else {
      game.addRollToFrame(frames, frameCount, roll)
      $(`#f${frameCount + 1} > .inner`).text(frames[frameCount]);
      frames = game.bonusChecker(frames);
      frameCount = game.frameTenCheck(frames, frameCount);
      $(`#f${frameCount} > span`).text(game.flattenAndSum(frames));
    }

    if (frameCount === 10) {
      $('.roll-score').css('display', 'none');
    }
  });
});
