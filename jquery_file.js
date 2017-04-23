$(document).ready(function() {
  var game = new Game();

  $('#bowl_button').click(function(){
    var frame = new Frame();
    frame.bowl();

    frame.bowl();
    game.addFrames(frame);
    game.updateScore();
    game.
    $('r1').text(10-frame.remainingPins);
})
