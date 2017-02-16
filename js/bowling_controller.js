$(document).ready(function () {
  var frame = new Frame();
  var finalFrame = new Frame();
  var game = new Game();
  var frameCount = 0;
  var rollFirst = null;
  var rollSecond = null;
  var finalRollFirst = null;
  var finalRollSecond = null;

  $("#random").click(function () {
    frame.randomRollOneFrame();
    finalFrame.randomRollOneFrame();
    frameCount += 1;
    (frameCount === 10) ? calculateFinalFrame(frame, finalFrame, frameCount) : updateFrame(frame);
    if (frameCount === 11) {
      location.reload();
    }
  })

  $("#new-game").click(function () {
    location.reload();
  })

  $("#choice-"+0).click(function () {
    reactToChoice(0);
  })

  $("#choice-"+1).click(function () {
    reactToChoice(1);
  })

  $("#choice-"+2).click(function () {
    reactToChoice(2);
  })

  $("#choice-"+3).click(function () {
    reactToChoice(3);
  })

  $("#choice-"+4).click(function () {
    reactToChoice(4);
  })

  $("#choice-"+5).click(function () {
    reactToChoice(5);
  })

  $("#choice-"+6).click(function () {
    reactToChoice(6);
  })

  $("#choice-"+7).click(function () {
    reactToChoice(7);
  })

  $("#choice-"+8).click(function () {
    reactToChoice(8);
  })

  $("#choice-"+9).click(function () {
    reactToChoice(9);
  })

  $("#choice-"+10).click(function () {
    reactToChoice(10);
  })

  var reactToChoice = function (n) {
    if (n === 10) {
      frameCount += 1;
      frame.rollOneFrame(n, 0);
      (frameCount >= 10) ?  finalFrameRoll(n, frame) : updateFrame(frame);
      rollFirst = null;
    }
    else if (rollFirst === null) {
      rollFirst = n;
      $("#roll-"+(frameCount+1)).text(rollFirst+"/--");
      for(var i = 10-n+1; i<=10; i++) {
        $("#choice-"+i).hide();
      }
    }
    else {
      frameCount += 1;
      frame.rollOneFrame(rollFirst, n);
      (frameCount >= 10) ?  finalFrameRoll(n, frame) : updateFrame(frame);
      for(var i = 0; i<=10; i++) {
        $("#choice-"+i).show();
      }
      rollFirst = null;
    }
  }

  var finalFrameRoll = function (n, frame) {
    if (finalRollFirst === null) {
      finalRollFirst = n;
    }
    else {
      finalRollSecond = n;
      finalFrame.rollOneFrame(finalRollFirst, finalRollSecond);
      calculateFinalFrame(frame, finalFrame, 10);
      finalRollFirst = null;
      finalRollSecond = null;
    }
  }

  var runOneFrame = function () {
    $("#score-"+frameCount).text(game.getScore(frameCount));
    $("#score-"+(frameCount-1)).text(game.getScore(frameCount-1));
    $("#score-"+(frameCount-2)).text(game.getScore(frameCount-2));
  }

  var calculateFinalFrame = function (frame, finalFrame, n) {
    $("#roll-"+n).text(frame._frame[0]+"/"+frame._frame[1]+"/"+finalFrame.getFrame()[0]+"/"+finalFrame.getFrame()[1]);
    game.finalFrame(frame, finalFrame.getFrame()[0], finalFrame.getFrame()[1]);
    updateScores(frameCount);
    $("#conclusion").text("Your final score is "+game.getScore(10)+" and you has played "+game.whichGame());
  }

  var updateFrame = function (frame, n) {
    game.addNewFrame(frame);
    console.log(frame._frame);
    $("#roll-"+frameCount).text(frame._frame[0]+"/"+frame._frame[1]);
    updateScores(frameCount);
  }

  var updateScores = function (frameCount) {
    $("#score-"+frameCount).text(game.getScore(frameCount));
    $("#score-"+(frameCount-1)).text(game.getScore(frameCount-1));
    $("#score-"+(frameCount-2)).text(game.getScore(frameCount-2));
  }
})
