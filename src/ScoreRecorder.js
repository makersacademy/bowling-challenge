$(document).ready(function () {
  var scorecard = new Scorer()

  $("input[type='number']").on('input', function () {
    if (this.value > 10 || this.value < 0) {
      event.preventDefault()
      alert('invalid score!')
    } else {
      scorecard.storeScore(this.value, this.id)
      scorecard.removeNullsFromRolls()
      scorecard.bonusCalculator()
      scorecard.updatedBonusNotes()
      scorecard.calculateTotalScore()
      $('#scoreShow').text('Your score is: ' + scorecard.totalScore)
    }
  })

  // hide fields for bonus rolls by default
  $('#ExtraRolls').hide()

  // show bonus rolls if user total is 10 for last frame
  jQuery('#note-10').bind('DOMSubtreeModified', function (event) {
    if ($('#note-10').text() === 'Strike') {
      $('#ExtraRolls').show()
    } else if ($('#note-10').text() === 'Spare') {
      $('#ExtraRolls').show()
      $('#ExtraRoll-2').hide()
    }
  })
})
