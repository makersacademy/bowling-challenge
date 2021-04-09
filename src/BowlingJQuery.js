$(document).ready( function() {
  let game = new Game()

  frameScores()

  $("#rolls-form").submit( function() {
    event.preventDefault();
    let input = $("#input-roll").val()
    if (isValidInput(input) === false) {
      return
    }
    let roll = parseInt(input);
    game.inputRoll(roll)

    frameScores()
    updateFrameNumber()
  })

  function frameScores() {
    for (let i = 1; i < 11; i++) {
      $(`#score${i}`).text(game.cumulScores[`frame_${i}`]);
    }
  }

  function isValidInput(input) {
    let validNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    if (!validNums.includes(input)) {
      return false
    }
  }

  function updateFrameNumber() {
    const numberDisplay = $("#frame-number-span")
    numberDisplay.text(game.frameNumber)
  }

})
