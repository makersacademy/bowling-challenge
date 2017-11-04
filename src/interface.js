$(document).ready(function () {

  var game = new Game()

  $(".pin, .gutter").click(function () {
    var pins = (Number($(this).val()))
    var roll = game.currentRoll()

    game.bowl(pins)
    var frame = game._frames.length
    $('.frame' + frame + '-roll' + roll).html(game._currentFrame._pinsKnockedDown[roll-1])
    for (var i = 1; i <= frame; i++) {
      $('.frame' + i + '-score').html(game._frames[i-1].getScore())
    }
    game.getScore()
    $('.score').html(game.currentScore())
  })

  $('.start-over').click(function () {
    location.reload()
  })
})
