$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#score-button').on('click', function() {
    score = parseInt( $('#score-input').val() )
    scorecard.addScore(score)
    // addInputScore(scorecard)
    insertScore(scorecard)
  })
})

function addInputScore(scorecard) {
  $("#scorecard tbody tr").remove()
  $.each(scorecard.frames, function(index, frame) {
    console.log(frame)
    $("#scorecard tbody")
      .append($('<tr id="' + index + '">')
          .append($('<td>').text(index + 1))
          .append($('<td>').text('roll'))
          .append($('<td>').text('pins'))
          .append($('<td>').text(frame.getFrameScore()))
          .append($('<td>').text('notes'))
      )
  })
}
