const GAME_OVER_ALERT = 'This game is over! Refresh to score a new game'
const INVALID_ROLL_ALERT = 'Please enter a valid roll!'

$(() => {
  const game = new Game()
  const scoreBoard = new ScoreBoard()

  $('#add-roll').on('click', () => {
    if (!$('#roll-input').val()) {
      alert(INVALID_ROLL_ALERT)
      return
    }

    try {
      game.addRoll($('#roll-input').val())
      updateScores()
      updateRolls()
      if (game.isOver()) { showTotalScore() }
    } catch (error) {
      errorHandler(error)
    }
  })

  function updateRolls() {
    updateFrames()
    if (game.frames.length === 10) { updateFinalFrame() }
  }

  function updateFrames() {
    for (let i = 0; i < 9; i += 1) {
      if (game.frames.length >= i + 1) {
        $(`#frame${i + 1}-roll1`).text(game.frames[i].rolls[0])
        $(`#frame${i + 1}-roll2`).text(game.frames[i].rolls[1])
      }
    }
  }

  function updateFinalFrame() {
    for (let i = 0; i < 3; i += 1) {
      $(`#frame10-roll${i + 1}`).text(game.frames[9].rolls[i])
    }
  }

  function updateScores() {
    for (let i = 0; i < 10; i += 1) {
      $(`#frame-score${i + 1}`).text(game.runningTotal()[i])
    }
  }

  function showTotalScore() {
    $('#total-score').text(`You scored ${game.totalScore()} points`)
  }

  function errorHandler(error) {
    if (error && game.isOver()) {
      console.log(error)
      alert(GAME_OVER_ALERT)
    } else if (error) {
      alert(INVALID_ROLL_ALERT)
    }
  }
})
