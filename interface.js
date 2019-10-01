$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#roll-score-0').click(function() {
    scorecard.add(0);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-1').click(function() {
    scorecard.add(1);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-2').click(function() {
    scorecard.add(2);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-3').click(function() {
    scorecard.add(3);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-4').click(function() {
    scorecard.add(4);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-5').click(function() {
    scorecard.add(5);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-6').click(function() {
    scorecard.add(6);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-7').click(function() {
    scorecard.add(7);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-8').click(function() {
    scorecard.add(8);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-9').click(function() {
    scorecard.add(9);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  $('#roll-score-10').click(function() {
    scorecard.add(10);
    scorecard.sum();
    updateTotalScore()
    updateFrameRolls()
  })

  function updateTotalScore() {
    $('#total-score').text(scorecard.score);
  }

  function updateFrameRolls() {
    $('#frame1-roll1').text(scorecard.frames[0][0]);
    $('#frame1-roll2').text(scorecard.frames[0][1]);
    $('#frame2-roll1').text(scorecard.frames[1][0]);
    $('#frame2-roll2').text(scorecard.frames[1][1]);
    $('#frame3-roll1').text(scorecard.frames[2][0]);
    $('#frame3-roll2').text(scorecard.frames[2][1]);
    $('#frame4-roll1').text(scorecard.frames[3][0]);
    $('#frame4-roll2').text(scorecard.frames[3][1]);
    $('#frame5-roll1').text(scorecard.frames[4][0]);
    $('#frame5-roll2').text(scorecard.frames[4][1]);
    $('#frame6-roll1').text(scorecard.frames[5][0]);
    $('#frame6-roll2').text(scorecard.frames[5][1]);
    $('#frame7-roll1').text(scorecard.frames[6][0]);
    $('#frame7-roll2').text(scorecard.frames[6][1]);
    $('#frame8-roll1').text(scorecard.frames[7][0]);
    $('#frame8-roll2').text(scorecard.frames[7][1]);
    $('#frame9-roll1').text(scorecard.frames[8][0]);
    $('#frame9-roll2').text(scorecard.frames[8][1]);
    $('#frame10-roll1').text(scorecard.frames[9][0]);
    $('#frame10-roll2').text(scorecard.frames[9][1]);
  }

})
