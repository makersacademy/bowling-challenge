$(document).ready(function() {
  let scorecard = new Scorecard();

  $("#bowl").submit(function (event) {
    event.preventDefault();
    let pins = parseInt($("#pins-bowled").val(), 10);
    scorecard.addRoll(pins, updateScorecard);
    $("#bowl")[0].reset();
  })

  function updateScorecard() {
    updateRolls();
    updateFrameScores();
  }

  function updateRolls() {
    for (let i = 0; i < 10; i++) {
      let frame = scorecard.frames[i];
      if (frame === undefined) { break; }
      let pins = _formatRolls(frame)
      $(`#frame${i+1}`).text(pins);
    }
  }

  function _formatRolls(frame) {
    if (frame._isStrike()) {
      return 'X';
    } else if (frame._isSpare()) {
      return frame._firstRollPins() + " /"
    } else if (frame._countRolls() === 2) {
      return frame.rolls[0].pins + " " + frame.rolls[1].pins
    } else if (frame._countRolls() === 1) {
      return frame.rolls[0].pins
    }
  }

  function updateFrameScores() {
    for (let i = 1; i < 11; i++) {
      let frameScore = scorecard.calcRunningScore(i);
      if (frameScore === undefined) { break; }
      $(`#score${i}`).text(frameScore);
    }
  }
})