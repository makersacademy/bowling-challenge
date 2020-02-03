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
    finalScore()
  })

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
        $(`#f${frameCount - 1}-score`).text(previousFrame.total)
      }
    } 
    
    if (frameCount > 2) {
      if (twoFramesPrior.type === 'strike') {
        $(`#f${frameCount - 2}-score`).text(twoFramesPrior.total)
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

  function finalScore() {
    if (game.rollCount === 21) {
      alert("Game Over! Great Game, champ!")
    }
  }

})
