$( document ).ready(function() {
  var game = new Game();
  updateScore();



   $( 'button' ).click(function() {
      var pins = parseInt(this.id);
      $(this).css('color','red');
      game.roll(pins);
      game.finalScore();
      updateScore();
  })



function updateScore() {
  game.score();
  $('#scoring').text(game.frameScore());
}
})
