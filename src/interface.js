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
      var frame = scorecard.getFrame(i)
      var rollDisplays = getRollDisplays(frame)
      totalScore = scorecard.score(i + 1)
      html = createFrameDiv(rollDisplays, totalScore)
      $("#scores").append(html)
    }
  }

  function getRollDisplays(frame) {
    if (frame.getNumber() == 10) {
      return getTenthRollDisplays(frame)
    } else {
      return getStandardRollDisplays(frame)
    }
  }

  function getStandardRollDisplays(frame) {
    return [frame.getRoll(0), frame.getRoll(1), '']
  }

  function getTenthRollDisplays(frame) {
    if (frame.isStrike()) {
      return [frame.getRoll(0), frame.getBonusRoll(0), frame.getBonusRoll(1)]
    } else {
      return [frame.getRoll(0), frame.getRoll(1), frame.getBonusRoll(0)]
    }
  }

  function createFrameDiv(rollDisplays, totalScore) {
    return `<div id="${i + 1}" class = "frame">
              <h3>${i + 1}</h3>
              ${rollDisplays[0]} ${rollDisplays[1]} ${rollDisplays[2]}<br>
              ${totalScore}
            </div>`
  }
})