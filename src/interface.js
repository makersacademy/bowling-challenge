console.log('interface loaded')

$( document ).ready(function() {

  var game = new Game()

  $('.random-bowl').click(function () {
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

  $('[class*="-pin-select"]').click(function () {
    var hitPins = (Number($(this).val()))
    var frame = game.currentFrame
    var roll = game.currentRoll
    game.play(hitPins)
    $('.f'+frame+'r'+roll).html(game.scorecard[frame][roll]['hitPins'])
    for(var i = 1; i <= frame; i++) {
      $('.f'+i+'s').html(game.scorecard[i]['frameScore'])
    }
    $('.current-score').html(game.currentScore)
    $('.final-score').html(game.finalScore)
  })
})
