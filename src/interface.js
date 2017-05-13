var game = new Game();
var count = 0;
var clickCount = 0;

$('.bowl-number').on('click', function() {
  clickCount++
  var choice = $(this).val();
  count++
  game._checkStatus();
  game.bowl(choice);
  $('#frame' + count).text(choice);
    if (count === 20) { count = 0 };
    if (clickCount % 2 === 0) {
      $('#score' + (count / 2)).text(game.score.total)
    }
    if (clickCount === 20) {
      endGame();
    }
});

function endGame() {
  $('.bowl-number').hide();
  $('#restart').show();
}
