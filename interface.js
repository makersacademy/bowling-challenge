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
    $('#frame1-roll1').text(scorecard.frames[0]);
    $('#frame1-roll2').text(scorecard.frames[1]);
    $('#frame2-roll1').text(scorecard.frames[2]);
    $('#frame2-roll2').text(scorecard.frames[3]);
    $('#frame3-roll1').text(scorecard.frames[4]);
    $('#frame3-roll2').text(scorecard.frames[5]);
    $('#frame4-roll1').text(scorecard.frames[6]);
    $('#frame4-roll2').text(scorecard.frames[7]);
    $('#frame5-roll1').text(scorecard.frames[8]);
    $('#frame5-roll2').text(scorecard.frames[9]);
    $('#frame6-roll1').text(scorecard.frames[10]);
    $('#frame6-roll2').text(scorecard.frames[11]);
    $('#frame7-roll1').text(scorecard.frames[12]);
    $('#frame7-roll2').text(scorecard.frames[13]);
    $('#frame8-roll1').text(scorecard.frames[14]);
    $('#frame8-roll2').text(scorecard.frames[15]);
    $('#frame9-roll1').text(scorecard.frames[16]);
    $('#frame9-roll2').text(scorecard.frames[17]);
    $('#frame10-roll1').text(scorecard.frames[18]);
    $('#frame10-roll2').text(scorecard.frames[19]);
  }

})
