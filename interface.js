$(document).ready(function() {
  var game = new Game();
  var frame = new Frame();
  updateFrame();

  // Click a roll button (0-10) to select number of pins knocked down
  $('.rollbutton').click(function() {
    rollScore = parseInt(this.value);
    frame.add(rollScore);
    frameNumber = frame._currentFrame;
    $('#frame-'+frameNumber).text(rollScore)
    console.log(frame._pinScore);
    if (frame._frameOver === true){
      game.add(frame);
      frame.next();
    }
    updateFrame();
    if (game._gameOver === true) {
      console.log("GAME OVER!" + game._totalScore)
    }
    return frame;
  });

  function updateFrame() {
    $('#current-frame').text(game._currentFrame)
  };
});
