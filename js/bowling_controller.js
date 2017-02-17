$(document).ready(function () {
  var frame = new Frame();
  var finalFrame = new Frame();
  var game = new Game();
  var frameCount = 0;
  var rollFirst = null;
  var rollSecond = null;
  var finalRollFirst = null;
  var finalRollSecond = null;
  var isFinalFrameStrike = false;
  var isFinalFrameSpare = false;

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

  $("#random").click(function () {
    frame.randomRollOneFrame();
    finalFrame.randomRollOneFrame();
    frameCount += 1;
    if (frameCount === 10) {
      dealWithFinalFrame();
    }
    else if (frameCount >= 11) {
      location.reload();
    }
    else {
      updateFrame(frame);
    }
  })

  var dealWithFinalFrame = function () {
    if (frameCount === 10) {
      if (frame.isStrike()){
        finalFrameStrike();
      }
      else if (frame.isSpare()) {
        calculateFinalFrameSpare(finalFrame.getFrame()[0])
      }
      else {
        calculateFinalFrameOrdinary();
      }
    }
    else {
      updateFrame(frame);
    }
  }

  var reactToChoice = function (n) {
    if (frameCount === 10) {
      dealWithFinalFrame();
    }
    // if (isFinalFrameStrike) {
    //   finalFrameStrike(n)
    // }
    // else if (isFinalFrameSpare) {
    //   calculateFinalFrameSpare(n)
    // }
    else if (n === 10) {
      frameCount += 1;
      frame.rollOneFrame(n, 0);
      // (frameCount == 10) ?  setFinalFrameStrike() : updateFrame(frame);
      updateFrame(frame);
      rollFirst = null;
    }
    else if (rollFirst === null) {
      rollFirst = n;
      printFirstRoll(n);
    }
    else {
      frameCount += 1;
      frame.rollOneFrame(rollFirst, n);
      // (frameCount == 10) ?  setFinalFrameSpare() : updateFrame(frame);
      updateFrame(frame);
      showAllChoices();
      rollFirst = null;
    }
  }

  var setFinalFrameSpare = function () {
    if (frame.isSpare) {
      isFinalFrameSpare = true;
    }
  }

  var calculateFinalFrameSpare = function (n) {
    $("#roll-10").text(frame._frame[0]+"/"+frame._frame[1]+"/"+n);
    game.finalFrame(frame, n);
    updateScores(frameCount);
    $("#conclusion").text("Your final score is "+game.getScore(10)+" and you have played "+ game.whichGame());
  }

  // var calculateFinalFrameSpare = function (n) {
  //   $("#roll-10").text(frame._frame[0]+"/"+frame._frame[1]+"/"+finalFrame.getFrame()[0]+"/"+finalFrame.getFrame()[1]);
  //   game.finalFrame(frame, finalFrame.getFrame()[0], finalFrame.getFrame()[1]);
  //   updateScores(frameCount);
  //   $("#conclusion").text("Your final score is "+game.getScore(10)+" and you have played "+ game.whichGame());
  // }

  var calculateFinalFrameOrdinary = function () {
    $("#roll-10").text(frame.getFrame()[0]+"/"+frame.getFrame()[1]);
    game.finalFrame(frame);
    updateScores(frameCount);
    $("#conclusion").text("Your final score is "+game.getScore(10)+" and you have played "+ game.whichGame());
  }

  // var calculateFinalFrame = function (frame, finalFrame, n) {
  //   $("#roll-10").text(frame._frame[0]+"/"+frame._frame[1]+"/"+finalFrame.getFrame()[0]+"/"+finalFrame.getFrame()[1]);
  //   game.finalFrame(frame, finalFrame.getFrame()[0], finalFrame.getFrame()[1]);
  //   updateScores(frameCount);
  //   $("#conclusion").text("Your final score is "+game.getScore(10)+" and you have played "+ game.whichGame());
  // }

  var setFinalFrameStrike = function () {
    isFinalFrameStrike = true;
  }

  var printFirstRoll = function (n) {
    $("#roll-"+(frameCount+1)).text(rollFirst+"/--");
    hideIrrelevantChoices(n);
  }

  var hideIrrelevantChoices = function (n) {
    for(var i = 10-n+1; i<=10; i++) {
      $("#choice-"+i).hide();
    }
  }

  var showAllChoices = function () {
    for(var i = 0; i<=10; i++) {
      $("#choice-"+i).show();
    }
  }

  var finalFrameStrike = function (n) {
    if (finalRollFirst === null) {
      finalRollFirst = n;
    }
    else {
      if (finalFrame.getFrame()[1] === null) {
        finalRollSecond = n;
        finalFrame.rollOneFrame(finalRollFirst, finalRollSecond);
      }
      calculateFinalFrameStrike();
      finalRollFirst = null;
      finalRollSecond = null;
    }
  }

  var calculateFinalFrameStrike = function () {
    $("#roll-10").text(10+"/"+finalFrame.getFrame()[0]+"/"+finalFrame.getFrame()[1]);
    game.finalFrame(frame, finalFrame.getFrame()[0], finalFrame.getFrame()[1]);
    updateScores(frameCount);
    $("#conclusion").text("Your final score is "+game.getScore(10)+" and you have played "+ game.whichGame());
  }

  var updateFrame = function (frame) {
    game.addNewFrame(frame);
    $("#roll-"+frameCount).text(frame._frame[0]+"/"+frame._frame[1]);
    updateScores(frameCount);
  }

  var updateScores = function (frameCount) {
    $("#score-"+frameCount).text(game.getScore(frameCount));
    $("#score-"+(frameCount-1)).text(game.getScore(frameCount-1));
    $("#score-"+(frameCount-2)).text(game.getScore(frameCount-2));
  }
})
