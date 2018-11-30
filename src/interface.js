$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#score-button').on('click', function() {
    score = $('#score-input').val()
    scorecard.addScore(score)
    addInputScore(scorecard)
  })
})

function addInputScore(scorecard) {
  $("#scorecard tbody tr").remove()
  $("#scorecard tbody")
    .append($('<tr>')
        .append($('<td>').text('frame'))
        .append($('<td>').text('roll'))
        .append($('<td>').text('pins'))
        .append($('<td>').text(scorecard.getCurrentScore()))
        .append($('<td>').text('notes'))
    )
}
