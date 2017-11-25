$(document).ready(function() {

  var bowling = new Bowling();
  var frame = [];

  $("#score").html(bowling.total());

  $('#submit').click(function() {
    var bowl = parseInt($('#bowl').val());
    frame.push(bowl);
    console.log(frame.length);
    if (frame.length === 2) {
      bowling.bowl(frame);
      $("#score").html(bowling.total());
      frame = [];
    }
  })
})
