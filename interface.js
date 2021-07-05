$(document).ready(function() {
  var game = new Game();
  updateDisplay();

  $("#one-pin").click(function() {
    game.bowl(1)
    updateDisplay();
  });

  $("#two-pins").click(function() {
    game.bowl(2)
    updateDisplay();
  });

  $("#three-pins").click(function() {
    game.bowl(3)
    updateDisplay();
  });

  $("#four-pins").click(function() {
    game.bowl(4)
    updateDisplay();
  });

  $("#five-pins").click(function() {
    game.bowl(5)
    updateDisplay();
  });

  $("#six-pins").click(function() {
    game.bowl(6)
    updateDisplay();
  });

  $("#seven-pins").click(function() {
    game.bowl(7)
    updateDisplay();
  });

  $("#eight-pins").click(function() {
    game.bowl(8)
    updateDisplay();
  });

  $("#nine-pins").click(function() {
    game.bowl(9)
    updateDisplay();
  });

  $("#ten-pins").click(function() {
    game.bowl(10)
    updateDisplay();
  });

  $("#reset-game").click(function() {
    game = new Game();
    updateDisplay();
  });

  function updateDisplay() {
    $("#score").text(game.score());
    $("#currentFrameIndex").text(game.currentFrameIndex + 1);
    console.log(game)
    var frameList = ""
    game.frames.forEach(function (frame) {
      frameList += (JSON.stringify(frame) + " - ")
    })
    $("#frames").text(frameList);
  };

  // function updateFrameIndex() {
  //   $("#currentFrameIndex").text(game.currentFrameIndex + 1);
  //   $("#currentFrame").text(JSON.stringify(game.frames[game.currentFrameIndex]));
  // }
})
