$(document).ready(function() {
  var game = new Game();
  var frameCount = 0;

  $('#total-score').text(game.viewScore())

  $('.roll-btn').on('click', function() {
    
    if (game.rollCount % 2 === 0) {
      frameCount += 1
      game.newFrame(Number(this.id))
      updateRoll1()
      updateBonus()
    } else {
      game.updateFrame(Number(this.id))
      updateRoll2()
    }
    updateScore()
    updateFrameTotal()
    
  })

  // $('#new-frame').on('click', function() {
  //   var roll = Number($("#roll1").val())
  //   game.newFrame(roll)
  //   updateScore()
  //   updateCounts()
  //   updateRoll1()
  // })

  // $('#update-frame').on('click', function() {
  //   var roll = Number($("#roll2").val())
  //   game.updateFrame(roll)
  //   updateScore()
  //   updateRoll2()
  //   frameTotal()
  // })

  function updateScore() {
    $('#total-score').text(game.viewScore())
  }


  function updateFrameTotal() {
    var roll = game.frames[frameCount -1].total
    $(`#f${frameCount}-score`).text(roll)
  }

  function updateBonus() {
    var previousFrame = game.frames[frameCount - 2]
    var twoFramesPrior = game.frames[frameCount - 3]
    if (frameCount > 1) {
      if (previousFrame.type === 'strike' || previousFrame.type === 'spare') {
        // console.log(game.frames[frameCount - 1].roll1)
        // console.log(previousFrame.total)
        // var total = game.frames[frameCount -1].roll1 + previousFrame.total
        $(`#f${frameCount - 1}-score`).text(previousFrame.total)
      }
    }
    
   
  }
  
  function updateRoll1() {
    var roll = game.frames[frameCount - 1].roll1
    $(`#f${frameCount}-r1`).text(roll)
  }

  function updateRoll2() {
    var roll = game.frames[frameCount - 1].roll2
    $(`#f${frameCount}-r2`).text(roll)
  }

})
