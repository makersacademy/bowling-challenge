$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#0').click(function() {
    scorecard.play(0);
    updateScores();
  });

  $('#1').click(function() {
    scorecard.play(1);
    updateScores();
  });

  $('#2').click(function() {
    scorecard.play(2);
    updateScores();
  });

  $('#3').click(function() {
    scorecard.play(3);
    updateScores();
  });

  $('#4').click(function() {
    scorecard.play(4);
    updateScores();
  });

  $('#5').click(function() {
    scorecard.play(5);
    updateScores();
  });

  $('#6').click(function() {
    scorecard.play(6);
    updateScores();
  });

  $('#7').click(function() {
    scorecard.play(7);
    updateScores();
  });

  $('#8').click(function() {
    scorecard.play(8);
    updateScores();
  });

  $('#9').click(function() {
    scorecard.play(9);
    updateScores();
  });

  $('#10').click(function() {
    scorecard.play(10);
    updateScores();
  });

  function updateScores() {
    $(`#${(scorecard.currentFrameIndex)+1}-1`).text(scorecard.currentFrame().firstBowl());
    if(scorecard.currentFrame().frame.length===2) {
      $(`#${(scorecard.currentFrameIndex)+1}-2`).text(scorecard.currentFrame().secondBowl());
    }
    if(scorecard.currentFrame().frame.length===3) {
      $(`#${(scorecard.currentFrameIndex)+1}-3`).text(scorecard.currentFrame().thirdBowl());
    }
    for(var i=0; i<=scorecard.currentFrameIndex; i++) {
      $(`#${i+1}-score`).text(scorecard.getRunningTotalUpTo(i));
    }
  }

});
