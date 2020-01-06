$(document).ready(() => {
  game = new Bowling()
  var frameNum = 1
  var completedFrames = 0
  var maxPins = 10

  function setDisplay () {
    if (frameNum === 10) {
      $(`#frame${frameNum}`).find('#roll1').text(game.frames[frameNum - 1].final1())
      $(`#frame${frameNum}`).find('#roll2').text(game.frames[frameNum - 1].final2())
      $(`#frame${frameNum}`).find('#extra').text(game.frames[frameNum - 1].final3())
    } else {
      $(`#frame${frameNum}`).find('#roll1').text(game.frames[frameNum - 1].roll1())
      $(`#frame${frameNum}`).find('#roll2').text(game.frames[frameNum - 1].roll2())
    }
    setScore()
    hideButtons()
    frameNum = game.frameNum()
    setBackground()
    showButtons()
  };

  function hideButtons () {
    maxRoll = frameNum === 10 ? game.frames[frameNum - 1].maxRollFinal() : game.frames[frameNum - 1].maxRoll()
    for (i = maxRoll + 1; i <= maxPins; i++) {
      $(`#pins${i}`).hide()
    };
  };

  function showButtons () {
    maxRoll = frameNum === 10 ? game.frames[frameNum - 1].maxRollFinal() : game.frames[frameNum - 1].maxRoll()
    for (i = 1; i <= maxRoll; i++) {
      $(`#pins${i}`).show()
    }
  }

  function setScore () {
    for (var i = completedFrames; i < frameNum; i++) {
      if (game.frames[i].closed()) {
        completedFrames++
        $(`#frame${i + 1}`).find('#frame-score').text(game.totalScore(i + 1))
      }
    }
  }

  function setBackground () {
    $(`#frame${frameNum}`).css('background-color', 'cyan')
    if (frameNum > 1) {
      $(`#frame${frameNum - 1}`).css('background-color', 'transparent')
    }
  }

  setBackground()

  $('.knockDownPinsBtn').click(function (event) {
    pins = Number(this.value)
    game.roll(pins)
    setDisplay(pins)
  })
})
