var game = new Game();
var count = 0;

$('.bowl-number').on('click', function() {
  var choice = $(this).val();
  var position = game._position();
  count++
  console.log(count);
  game.bowl(choice);
  // console.log(game.score.card);
  // console.log(game.frameNumber);
  // console.log(game.score.card);
  $('#frame' + count).text(choice);
  if (count === 20) { count = 0 };
});
