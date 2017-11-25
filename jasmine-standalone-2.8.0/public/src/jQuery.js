var bowling = new Bowling();

$(document).ready(function() {

  $('#throwBall').click(function() {
    bowling.throw(5)
  })

});
