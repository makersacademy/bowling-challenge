$(document).ready(function() {
  var game = new Game();
  var roll = new Roll(7,1);
  var frame = new Frame();
  updateFrame();

  $('#roll').click(function() {
    frame.add(roll);
    if (frame._frameOver === true){
      game.add(frame);
      frame = new Frame();
      // var frame = new Frame(); this causes
    }
    updateFrame();
  });

  function updateFrame() {
    $('#current-frame').text(game._currentFrame)
  };
});
