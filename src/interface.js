var game = new Game();

$('#calculate').on('click', function() {
  for (i = 0; i < game.frames.length; i++) {
    if (game.frames[i].isSpare()) {
      $('#frame' + i + '-1').text(game.frames[i].score[0]);
      $('#frame' + i + '-2').text('/');
      game.totalScore += game.frames[i].calculate() + game.frames[i + 1].score[0];
      $('#score' + i).text(game.totalScore);
      console.log(game.totalScore);
    } else if (game.frames[i].isStrike()) {
      $('#frame' + i + '-2').text('X');
      game.totalScore += game.strikeCalc(i);
      $('#score' + i).text(game.totalScore);
      console.log(game.totalScore);
    } else {
      game.totalScore += game.frames[i].calculate()
      $('#frame' + i + '-1').text(game.frames[i].score[0]);
      $('#frame' + i + '-2').text(game.frames[i].score[1]);
      $('#score' + i).text(game.totalScore);
      console.log(game.totalScore);
  };
};
});
