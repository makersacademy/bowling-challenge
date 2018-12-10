$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#score-button').on('click', function() {
    score = parseInt( $('#score-input').val() )
    scorecard.addScore(score)
    updateScores(scorecard)
  })
})

function updateScores(scorecard) {
  $.each(scorecard.frames, function(index, frame) {
    var frameNumber = index + 1
    replace = '#frame-' + frameNumber + '-score'
    $(replace).text(scorecard.getScoreToFrame(index))
    console.log(replace)
    $.each(frame.rolls, function(index, roll) {
      rollNumber = index + 1
      replace = '#frame-' + frameNumber + "-roll-" + rollNumber
      $(replace).text(roll.score)
    })
  })
}
