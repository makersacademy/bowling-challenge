$(document).ready(function() {
  bowlingScorecard = new BowlingScorecard();
  
  updateFrame();

  function updateFrame() {
    $('#completed-frames').text(bowlingScorecard.getFrameCounter());
  };

  
});