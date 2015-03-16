var scorecard = new ScoreCard();

var score = 0;

  $(document).ready(function(){

  $('#score').text(scorecard.score);

  $('.HitPins').click(function(){
    score = parseInt(document.getElementById("userPins").value);
    scorecard.hitPins(score);
    scorecard.tallyFrameScore();
    scorecard.tallyTotalScore();
    $('#frame1').text(scorecard.frames[1].score);
    $('#frame2').text(scorecard.frames[2].score);
    $('#frame3').text(scorecard.frames[3].score);
    $('#frame4').text(scorecard.frames[4].score);
    $('#frame5').text(scorecard.frames[5].score);
    $('#frame6').text(scorecard.frames[6].score);
    $('#frame7').text(scorecard.frames[7].score);
    $('#frame8').text(scorecard.frames[8].score);
    $('#frame9').text(scorecard.frames[9].score);
    $('#frame10').text(scorecard.frames[10].score);
  $('#score').text(scorecard.score);
  });






});
