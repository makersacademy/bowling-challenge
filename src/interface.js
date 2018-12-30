/* eslint-disable camelcase */
/* global Game:true */

$(document).ready(function () {
  var game = new Game()

  for (let i = 0; i < 11; i += 1) {
    $('#score' + i).click(function () {
      console.log(game)
      markInput(i)
      frScore()
      finalFrScore()
      accumScore()
      disableButtons(i)
      gameOver()
    })
  };

  function markInput (i) {
    var cur_frame = game.cur_frame
    var cur_roll = game.cur_roll
    $('#frame' + cur_frame + '_r' + cur_roll).text(game.knockDown(i))
  }

  function frScore () {
    for (let i = 1; i < 10; i++) {
      if ($.trim($('#frameScore' + i).html()) === '') {
        $('#frameScore' + i).text(game.frameScore(i))
      }
    }
  }

  function finalFrScore () {
    if (!game.gameRecord[9]) { return }
    $('#frameScore10').text(game.finalFrScore())
  }

  function accumScore () {
    for (let i = 1; i <= 10; i++) {
      $('#totalScore' + i).text(game.accumScore(i))
    }
  }

  function disableButtons (num) {
    if (game.cur_roll === 2 && num !== 10) {
      var to_disable = 11 - num
      for (let i = to_disable; i <= 11; i++) {
        $('#score' + i).hide()
      }
    } else {
      for (var i = 0; i < 11; i++) {
        $('#score' + i).show()
      }
    }
  }

  function gameOver () {
    if (game.gameRecord[9]) {
      $('#gameOver').text('Game Over!')
    }
  }

  $('#resetGame').click(function () {
    resetGame()
    $('#frame_table td').empty()
    console.log('game restart')
  })

  function resetGame () {
    game.cur_frame = 1
    game.cur_roll = 1
    game.frameRecord = []
    game.gameRecord = []
    game.totalScore = []
    $('#gameOver').hide()
  }
})

/* eslint-enable camelcase */
