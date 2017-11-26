$(document).ready(function() {

  var frame = new Frame();
  var bowlCounter = 1;

  $("#submit-score").click(function() {
    var score = $("#bowl-score").val();
    frame.setBowlOneScore(score);
    $('td:nth-of-type('+(bowlCounter)+')').html(frame.getBowlOneScore());
    i++;
  });
});
