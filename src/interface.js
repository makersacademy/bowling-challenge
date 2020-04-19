$(document).ready(function() {
  var game = new Game();
  updateDisplay();

  $('.pins #pin').click(function() {
    var text = parseInt($(this).text());
    game.bowlBall(text);
    updateDisplay();
  })

 
 
  function updateDisplay() {
    $('#bonus').text(game.getBonusScore());
    $('#main').text(game.getScore());
    $('#total').text(game.getTotalScore());
    $('#1 .bottom').text(game.getFrameScore())
  }

});