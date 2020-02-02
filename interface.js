$(document).ready(function() {
  var game = new Game();
  var frameCount = 0;

  $('#total-score').text(game.viewScore())

  $('.roll-btn').on('click', function() {
    if (game.rollCount % 2 === 0) {
      game.newFrame(Number(this.id))
      console.log(frameCount)
      updateRoll1()
    } else {
      game.updateFrame(Number(this.id))
      updateRoll2()
    }
    updateScore()
    updateCounts()
  })

  $('#new-frame').on('click', function() {
    var roll = Number($("#roll1").val())
    game.newFrame(roll)
    updateScore()
    updateCounts()
    updateRoll1()
  })

  $('#update-frame').on('click', function() {
    var roll = Number($("#roll2").val())
    game.updateFrame(roll)
    updateScore()
    updateRoll2()
    frameTotal()
  })

  function updateScore() {
    $('#total-score').text(game.viewScore())
  }


  function frameTotal() {
    var roll = game.frames[frameCount -1].total
    $(`#f${frameCount}-score`).text(roll)
  }
  
  function updateRoll1() {
    var roll = game.frames[frameCount -1].roll1
    $(`#f${frameCount}-r1`).text(roll)
  }

  function updateRoll2() {
    var roll = game.frames[frameCount -1].roll2
    $(`#f${frameCount}-r2`).text(roll)
  }

  function updateCounts() {
    frameCount += 1
  }

})
