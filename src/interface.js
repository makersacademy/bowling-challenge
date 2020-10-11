$(document).ready(function() {
  let scorecard = new Scorecard();

  $("#bowl").submit(function (event) {
    event.preventDefault();
    $("#error").text("")
    let pins = parseInt($("#pins-bowled").val(), 10);
    try {
      scorecard.addRoll(pins);
    } catch(err) {
      $("#error").text(err)
    } finally {
      $("#bowl")[0].reset();
      updateScorecard();
    }
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
    if (frame._countRolls() === 3) {
      return _format3Rolls(frame);
    } else if (frame._isStrike()) {
      return 'X';
    } else if (frame._countRolls() === 2 && frame._totalPins() === 20) {
      return 'X X';
    } else if (frame._isSpare()) {
      return frame._firstRollPins() + " /"
    } else if (frame._countRolls() === 2) {
      return frame.rolls[0].pins + " " + frame.rolls[1].pins
    } else if (frame._countRolls() === 1) {
      return frame.rolls[0].pins
    }
  }

  function _format3Rolls(frame) {
    let thirdRoll = frame.rolls[2].pins === 10 ? 'X' : frame.rolls[2].pins;
    if (frame._firstRollPins() === 10) {
      let secondRoll = frame.rolls[1].pins === 10 ? 'X' : frame.rolls[1].pins;
      return 'X ' + secondRoll + ' ' + thirdRoll;
    } else {
      return frame._firstRollPins() + " / " + thirdRoll;
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