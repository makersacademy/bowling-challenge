$( document ).ready(function() {
  var game = new Game;
  var scorecard

  $( "#roll-ball" ).click(function(event) {
    event.preventDefault();
    var pins = $( '#score-select' ).val();
    if (pins > 10) {
      $( '#Score' ).text("You can't knock down more than 10 you cheat")
    }
    else if (game.checkPlaying()) {
      game.roll(parseInt(pins))
      updateScoreDisplay()
      updateFrameNumber()}
    else {
      $( '#Score' ).text('Go home, the game is over...')
    }
  })

  function updateScoreDisplay(){
    if (game.checkPlaying()) {
      $( '#Score' ).text('Score: ' + game._score.join(', '))
    }
    else {
      scorecard = new Scorecard(game.score())
      $('#Score').text("You scored:" + scorecard.calcScore(game._score, 1))
    }
  }
  function updateFrameNumber(){
    $( '#Frame' ).text('Frame: ' + game._frameNumber)
  }
})
