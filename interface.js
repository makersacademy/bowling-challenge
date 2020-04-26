$(document).ready(function() {
  const scorecard = new Scorecard();

  $('#addFrame').click(function(e) {
    e.preventDefault();
    let roll1 = parseInt($('#roll1').val());
    let roll2 = parseInt($('#roll2').val());
    if (isNaN(roll1)) {
      roll1 = 0;
    } if (isNaN(roll2)) {
      roll2 = 0;
    }
    scorecard.addFrame(new Frame(roll1, roll2));
    $('#score').text(scorecard.score);
    $('#frames').text(scorecard.frames.length);
    console.log(scorecard.frames.length);
  });
});
