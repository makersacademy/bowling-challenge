$(document).ready(function () {
  var game = new Game()
  updateTotalScore()

  $(':button').click(function () {
    var pins = parseInt($( event.target ).attr('value'))
    $('#error').empty()
    addBowl(pins)
    updateScorecard()
    updateTotalScore()
  })

  function updateTotalScore () {
    $('#currentScore').text('score: ' + game.getCurrentScore())
  }

  function addBowl(pins) {
    try {
      game.addBowl(pins)
    }
    catch(error) {
      $('#error').text(error)
    }
  }

  function updateScorecard() {
    var frameNumber = game._frames.length
    var bowls = game.getCurrentFrame().getBowls().join(', ')
    $(`#frame${frameNumber}`).text(bowls)
    $('.frameScore').each(function () {
      var frameNumber = parseInt($( this ).attr('id'))
      try {
        $( this ).text(game._frames[frameNumber].getScore(game._frames[frameNumber + 1], game._frames[frameNumber + 2]))
        console.log(game._frames[frameNumber])
      }
      catch(error) {
        $( this ).empty()
      }
    })
  }
})
