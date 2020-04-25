$(document).ready(function() {
  var game = new Game();
  updateDisplay();

  $('.pins #pin').click(function() {
    if (!game.complete()) {
      var text = parseInt($(this).text());
      game.bowlBall(text);
      updateDisplay();
    }
  })

  function updateDisplay() {
    updateScores()
    updateFrames()
  }

  function updateScores() {
    $('#bonus').text(game.getBonusScore());
    $('#main').text(game.getScore());
    $('#total').text(game.getTotalScore());
  }

  function updateFrames() {
    var number = game.getFrameCount()
    $('#'+number+'.left').text(game.firstTurn)
    $('#'+(number-1)+'.right').text(game.secondTurn)
    $('#'+(number-1)+'.bottom').text(game.frameScore) 
  }
});