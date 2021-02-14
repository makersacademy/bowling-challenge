$(document).ready(function() {
  const game = new Game();

  updateScore = () => {
    $('#score').text(game.totalScore());
  }

  seeFrames = () => {
    $('#frames').text(game.showFrames());
  }

  bowl = pins => {
    game.roll(pins);
    updateScore();
    seeFrames()
  }

  $('button').click(function() {
    var id = $(this).attr('id');
    bowl(id);
  });

  updateScore();
  seeFrames();
})