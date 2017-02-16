var frame = new Frame();
var finalFrame = new Frame();
var game = new Game();
var frameCount = 0;

$("#random").click(function () {
  frame.randomRollOneFrame();
  game.addNewFrame(frame);
  frameCount += 1;
  console.log(game._scores)
  $("#roll-"+frameCount).text(frame._frame[0]+"/"+frame._frame[1]);
  $("#score-"+frameCount).text(game.getScore(frameCount));
  $("#score-"+(frameCount-1)).text(game.getScore(frameCount-1));
  $("#score-"+(frameCount-2)).text(game.getScore(frameCount-2));
  if (frameCount === 10) {
    frame.randomRollOneFrame();
    finalFrame.randomRollOneFrame();
    game.finalFrame(frame, finalFrame.getFrame()[0], finalFrame.getFrame()[1]);
    $("#roll-"+frameCount).text(frame._frame[0]+"/"+frame._frame[1]+"/"+finalFrame.getFrame()[0]+"/"+finalFrame.getFrame()[1]);
    $("#score-"+frameCount).text(game.getScore(frameCount));
    $("#score-"+(frameCount-1)).text(game.getScore(frameCount-1));
    $("#score-"+(frameCount-2)).text(game.getScore(frameCount-2));
    $("#conclusion").text("Your final score is: "+game.getScore(10)+" and you has played "+game.whichGame());
  }
  if (frameCount === 11) {
    location.reload();
  }
})
