$(document).ready(function() {
  var game = new Game();
  var roll = new Roll(5,1);
  var frame = new Frame();
  updateFrame();

  $('#roll').click(function() {
    frame.add(roll);
    if (frame._frameOver === true){
      game.add(frame);
      frame.reset();
    }
    updateFrame();
  });

  function updateFrame() {
    $('#current-frame').text(game._currentFrame)
  };
});
