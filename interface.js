$(document).ready(function() {
  var bowlinggame = new BowlingGame();


  $('#frame1shot1').html(bowlinggame.score[0].firstshot || 0);

  $('#submit').on('click', function() {
    enterScore();
  })
)};


