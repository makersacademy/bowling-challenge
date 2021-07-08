$(document).ready(function() {
  const scorecard = new Scorecard(Frame)

  const addRollToView = (currentFrame) => {
    $("#scorecardRows").append(
      `<tr class="scorecard-row${currentFrame.number}">
        <td>${currentFrame.number}</td>
        <td>${currentFrame.rolls.length}</td>
        <td>${currentFrame.rolls[currentFrame.rolls.length - 1]}</td>
        <td class="finalScoreCol"></td>
      </tr>`
    )
  }

  const updateRunningScores = (runningScores) => {
    runningScores.forEach(function(runningScore, index) {
      const rowsForFrame = $(`.scorecard-row${index + 1}`).last().children().last().text(runningScore)
    })
  }

  $('#addRoll').on('click', function() {
    const rollValue = parseInt($('#rollValue').val(),10)
    const scorecardValues = scorecard.roll(rollValue)

    addRollToView(scorecardValues.currentFrame)
    updateRunningScores(scorecardValues.runningScores)
  })
})
