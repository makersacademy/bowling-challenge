$(document).ready( function() {
  let game = new Game()

  updateFrameScore()
  dropDownInput()

  $("#rolls-form").submit( function(event) {
    event.preventDefault();
    let input = $("#input-roll").val()
    let roll = parseInt(input);
    game.inputRoll(roll)

    updateFrameScore()
    updateFrameNumber()
    updateFinalScore()
    dropDownInput()

    if (game.isEnded) {
      endOfGame()
    }
  })

  $("#clear-form").submit( function(event) {
    // event.preventDefault();
  })

  function updateFrameScore() {
    for (let i = 1; i < Object.keys(game.scores).length + 1; i++) {
      $(`#fr${i}total`).text(game.cumulScores[`frame_${i}`]);

      $(`#fr${i}roll1`).text(`${game.frames[i - 1].displayResults()[0]}`);
      $(`#fr${i}roll2`).text(`${game.frames[i - 1].displayResults()[1]}`);
    }
    if (game.frames.length === 10) {
      $(`#fr10roll3`).text(`${game.frames[9].displayResults()[2]}`);
      $(`#fr10roll4`).text(`${game.frames[9].displayResults()[3]}`);
    }
  }


  function updateFrameNumber() {
    const numberDisplay = $("#frame-number-span")
    numberDisplay.text(game.frameNumber)
  }

  function updateFinalScore() {
    const finalTotalDisplay = $("#final-total")
    if (game.isEnded) {
      finalTotalDisplay.text(game.cumulScores[`frame_10`])
    } else {
      finalTotalDisplay.text("")
    }
  }

  function dropDownInput() {
    let menuOptions = ""
    for (let i = 0; i < game.remainingPins() + 1; i++) {
      menuOptions += `<option value="${i}">${i}</option>`
    }
    $('#input-roll').html(menuOptions)
  }

  function endOfGame() {
    let postGameForm = `Game ended! Your score: ${game.cumulScores['frame_10']}
          <form class="input-form hidden" id="rolls-form">
            <select id="input-roll">
            </select>
            <button type="submit">Yeah!</button>
          </form>`
    $('#enter-rolls').html(postGameForm)
    $('#clear-button').text("Restart")
  }


})
