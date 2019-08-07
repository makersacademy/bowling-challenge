$(document).ready(function() {
  var game = new Game();
  var roll = new Roll(3,1);
  var frame = new Frame();
  updateFrame();

  $('#roll').click(function() {
    frame.add(roll);
    console.log(frame._spare)
    console.log(frame._currentFrame)
    if (frame._frameOver === true){
      game.add(frame);
      frame.next();
    }
    updateFrame();
    if (game._gameOver === true) {
      console.log("GAME OVER!" + game._totalScore)
    }
  });

  function updateFrame() {
    $('#current-frame').text(game._currentFrame)
  };
});
