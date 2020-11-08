$(document).ready(function () {
  var scorecard = new Scorecard

  $('#new-roll').submit(function (event) {
    event.preventDefault();
    scorecard.roll(parseInt($("#roll").val()))
    printScores()
  })

  function printScores() {
    $("#scores").empty()
    for (i = 0; i < scorecard.getNumFrames(); i++) {
      roll0 = scorecard.getFrame(i).getRoll(0)
      roll1 = scorecard.getFrame(i).getRoll(1)
      totalScore = scorecard.score(i)
      html = `<div id="${i}" class = "frame">
                <h3>${i}</h3>
                ${roll0} ${roll1}<br>
                ${totalScore}
              </div>`
      $("#scores").append(html)
    }
  }
})