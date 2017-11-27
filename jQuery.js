$(document).ready(function() {

  var bowlCount = 1;

  $("#submit-score").click(function() {
    var frame = new Frame();
    var score = $("#bowl-score").val();
    if (bowlCount % 2 != 0) {
      frame.setBowlOneScore(score);
      $('td:nth-of-type('+(bowlCount)+')').html(frame.getBowlOneScore());
    } else {
      frame.setBowlTwoScore(score);
      $('td:nth-of-type('+(bowlCount)+')').html(frame.getBowlTwoScore());
      var frame = new Frame();
    }
    bowlCount++;
  });
});
