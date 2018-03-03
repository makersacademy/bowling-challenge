$(document).ready(function() {
  var game = new Game();
  var calculator = new GameCalculator();
  var completedFrames = 0;
  var scoresArray = [];
  var score;

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

  $('.insert-score').click(function(){
    for (var i = 1; i <= scoresArray.length; i ++) {
      $(`#f${i} > span`).text(game.flattenAndSum(scoresArray.slice(0, i)));
    }
    score = parseInt(this.id);

    if (completedFrames < 9) {
      game.addRollToFrame(scoresArray, completedFrames, score);
      $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
      completedFrames = game.completeFrameCheck(scoresArray, completedFrames);
    } else {
      game.addRollToFrame(scoresArray, completedFrames, score)
      $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
      scoresArray = game.frameChecker(scoresArray);
      completedFrames = game.frameTenCheck(scoresArray, completedFrames);
      $(`#f${completedFrames} > span`).text(game.flattenAndSum(scoresArray));
    }

    if (completedFrames === 10) {
      $('.insert-score').css('display', 'none');
    }
  });
});
