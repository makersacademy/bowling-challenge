$(document).ready(function () {
  var scorecard = new Scorecard();

  $('#update').click(function () {
    var a = parseInt(document.getElementById('frame1-bowl1').value);
    scorecard.frameArray[0].reportBowlOne(a);
    var b = parseInt(document.getElementById('frame1-bowl2').value);
    scorecard.frameArray[0].reportBowlTwo(b);
    var c = parseInt(document.getElementById('frame2-bowl1').value);
    scorecard.frameArray[1].reportBowlOne(c);
    var d = parseInt(document.getElementById('frame2-bowl2').value);
    scorecard.frameArray[1].reportBowlTwo(d);

    updateScore();
  });

  function updateScore() {
    $('#current-score').text(scorecard.computeScore());
  }
});
