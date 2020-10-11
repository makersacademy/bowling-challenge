$(document).ready(function() {
  let scorecard = new Scorecard();

  $("#bowl").submit(function (event) {
    event.preventDefault();
    let pins = parseInt($("#pins-bowled").val(), 10);
    scorecard.addRoll(pins, updateFrameScores);
    $("#bowl")[0].reset();
  })
  //
  // function updateFrameScore(frameNum) {
  //   $(`#score${frameNum}`).text(scorecard._getFrameScore(frameNum));
  // }

  function updateFrameScores() {
    for (let i = 1; i < 11; i++) {
      let frameScore = scorecard._getFrameScore(i);
      if (frameScore === undefined) { break; }
      if (frameScore === false) { continue; }
      $(`#score${i}`).text(frameScore);
    }
  }
})