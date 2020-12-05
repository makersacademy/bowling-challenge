$(document).ready(function () {

  function updateMessage() {
    $('#current-frame').text(game.currentFrameNumber());
    $('#current-roll').text(game.currentFrameObject().currentRollNumber());
  };

  let game = new Game();
  game.newFrame(new Frame());
  updateMessage();


});
