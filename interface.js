$(document).ready(function() {
  const scorecard = new Scorecard2();
  let numberOfRolls = 0;

  $('.record').click(function(e) {
    e.preventDefault(e);
    numberOfRolls += 1;
    const rollScore = parseInt(e.currentTarget.value);
    scorecard.addRoll(rollScore);
    const frameNumber = scorecard.frames.length;

    $('#score').text(scorecard.score);
    $('#frames').text(frameNumber);

    if (frameNumber >= 10 && rollScore === 10) {
      $('#roll' + numberOfRolls).text(rollScore);
    } else if (rollScore === 10) {
      $('#roll' + numberOfRolls).text(rollScore);
      numberOfRolls += 1;
      $('#roll' + numberOfRolls).text('/');
    } else {
      $('#roll' + numberOfRolls).text(rollScore);
      $('#frame' + scorecard.frames.length).text;
    }

    updateButtons(scorecard.rolls.length, rollScore);

    $('#frame' + scorecard.frames.length).text(scorecard.score);
  });

  function updateButtons(rollsThisFrame, rollScore) {
    if (rollsThisFrame === 1) {
      for (i = 11-rollScore; i < 11; i++) {
        $(`#${i}.record`).prop('disabled', true);
      }
    } else {
      $('.record').prop('disabled', false);
    }
  }
});
