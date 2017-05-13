var game = new Game();

$('#one').on('click', function() {
  $('p').text(game.frameNumber);
});
