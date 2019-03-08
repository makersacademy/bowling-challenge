$(document).ready(function() {
  $('#addRoll').on('click', function() {
    scorecard.roll($('#rollValue').val())
  })
})
