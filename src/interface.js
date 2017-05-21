var game = new Game();

$('.bowl-number').on('click', function() {
  bowl = Number($(this).val())
  game.bowl(bowl);
  game.currentFrame ? updateFirstBowl(bowl) : updateScores()
});

function updateScores(num) {
  var i = 0;
  game.frames.forEach(function(frame) {
    $('#frame' + i + '-1').text(frame.score[0]);
    $('#frame' + i + '-2').text(frame.score[1]);
    i++;
  });
};
