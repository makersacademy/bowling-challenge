console.log('interface loaded')

$( document ).ready(function() {

  var game = new Game()

  $('.bowl').click(function () {
    var frame = game.currentFrame
    var roll = game.currentRoll
    game.play()
    $('.f'+frame+'r'+roll).html(game.scorecard[frame][roll]['hitPins'])
    for(var i = 1; i <= frame; i++) {
      $('.f'+i+'s').html(game.scorecard[i]['frameScore'])
    }
    $('.current-score').html(game.currentScore)
    $('.final-score').html(game.finalScore)
  })
})
