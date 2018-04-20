$(document).ready(function () {

  setupGame();

  // Listeners

  $('.hit-pins').on('click', function () {
    addRoll(parseInt($(this).val()))
  });

  function setupGame() {
    var empty_frames = []
    for (i = 0; i < 10; i++) {
      empty_frames.push(new Frame())
    }
    game = new Game(empty_frames);
  }

  function addRoll(pins) {
    game.addRoll(pins)
    hidePinButtons(pins)
    updateTotalScore()
    writeRolls()
    writeFrames()
  }

  function updateTotalScore() {
    $("#current-score").text(game.score());
  };

  function writeRolls() {
    for (n = 0; n <= game.currentFrameIndex; n++) {
      var frame = game.getFrames()[n]
      $("#frame" + (n + 1) + "roll1").text(getFirstRoll(frame))
      $("#frame" + (n + 1) + "roll2").text(getSecondRoll(frame))
      if (n === 9) {
        $("#frame10roll3").text(game.getFrames()[9].thirdRoll())
      }
    }
  };

  function getFirstRoll(frame) {
    if (frame.isStrike()) { return "" }
    return frame.firstRoll()
  }

  function getSecondRoll(frame) {
    if (frame.isSpare()) { return "/" }
    if (frame.isStrike()) { return "X" }
    return frame.secondRoll()
  }

  function writeFrames() {
    for (n = 0; n <= game.currentFrameIndex; n++) {
      var frame = game.getFrames()[n]
      var frameNPlus1 = game.getFrames()[n+1]
      var frameNPlus2 = game.getFrames()[n+2]
      $("#frameScore" + (n + 1)).text(frame.score() + frame.bonusScore(frameNPlus1,frameNPlus2))
    }
  }

  function hidePinButtons(pins) {
    if (game.currentFrame().secondRoll() == null && !(game.currentFrame().isSpare() || game.currentFrame().isStrike()) ) {
      for (n = 10; n > (10 - pins); n--) {
        $("#hit" + n).hide()
      }
    } else {
      for (n = 1; n <= 10; n++) {
        $("#hit" + n).show()
      }
    }
  }


});