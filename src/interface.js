$(document).ready(function() {
  const game = new Game();

  updateScore = () => {
    $('#score').text(game.totalScore());
  }

  bowl = pins => {
    game.roll(pins);
    console.log(game.totalScore())
    
    updateScore();
  }

  $('button').click(function() {
    var id = $(this).attr('id');
    bowl(+id);
  });

  updateScore();
  seeFrames();
})