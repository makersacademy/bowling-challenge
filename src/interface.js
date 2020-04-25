$(document).ready(function() {
  var game = new Game();
  updateDisplay();

  $('.pins #pin').click(function() {
    var text = parseInt($(this).text());
    game.bowlBall(text);
    updateDisplay();
  })

  function updateDisplay() {
    updateScores()
    var number = game.getFrameCount()
    $('#'+number+'.left').text(game.getFirstRoll())
    $('#'+(number-1)+'.right').text(game._secondTurn)
    $('#'+(number-1)+'.bottom').text(game._frameScore) 
  }

  function updateScores() {
    $('#bonus').text(game.getBonusScore());
    $('#main').text(game.getScore());
    $('#total').text(game.getTotalScore());
  }
});