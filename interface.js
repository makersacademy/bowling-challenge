$(document).ready(function() {
  let bowling = new Bowling();

  $('#score').on('click', function() {
    bowling.scoring(num);
    $('#frame1').text(bowling.score[0], bowling.score[1]);
  });
});
