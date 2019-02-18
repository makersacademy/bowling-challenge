$(document).ready(function() {
  scorecard = new ScoreCard();
  buttons(0);
});

function playAgain() {
  scorecard = new ScoreCard();
  $("#scorecardTable td").html("");
  buttons(0);
  hide();
}

function press(fallenPins) {
  if (scorecard.frames.length === 0 || scorecard.currentFrameOver()) {
    frame = new Frame();
    scorecard.addFrame(frame);
    update(fallenPins, 1);
  } else {
    update(fallenPins, 2);
  }
  gameOver();
}

function update(fallenPins, rollNo) {
  frame.bowlResult(fallenPins);
  var currentFrame = scorecard.frames.length - 1;
  if (rollNo === 1) {
    selectRollDisplayContent1(fallenPins, currentFrame);
  } else {
    selectRollDisplayContent2(fallenPins, currentFrame);
  }
  updateGameScoreDisplay(currentFrame);
  updateButtons(fallenPins, currentFrame);
}

function updateButtons (fallenPins, currentFrame) {
  if (
    scorecard.currentFrameOver() ||
    (scorecard.frames.length === scorecard.framesLimit &&
      !(
        scorecard.frames[scorecard.framesLimit - 1].bowls.length === 1 &&
        scorecard.frames[scorecard.framesLimit - 1].bowls[0] <
        scorecard.frames[currentFrame].pins
      ))
  ) {
    buttons(0);
  } else {
    buttons(fallenPins);
  }
}

function buttons(fallenPins) {
  var buttonStr = "";
  for (var i = 0; i < 11 - fallenPins; i++) {
    buttonStr +=
      '<button type="button" class="button" onclick="press(' + i + ')">' + i + "</button>";
  }
  $("#buttons").html(buttonStr);
}

function strike(fallenPins) {
  return fallenPins === frame.pins;
}

function spare(currentFrame) {
  return (
    scorecard.frames[currentFrame].bowls[0] +
    scorecard.frames[currentFrame].bowls[1] ===
    scorecard.frames[currentFrame].pins
  );
}

function selectRollDisplayContent1(fallenPins, currentFrame) {
  if (strike(fallenPins) && scorecard.frames.length < scorecard.framesLimit) {
    updateRollDislay(1, currentFrame, "X");
  } else if (
    strike(fallenPins) &&
    scorecard.frames.length === scorecard.framesLimit
  ) {
    updateRollDislay(0, currentFrame, "X");
  } else {
    updateRollDislay(0, currentFrame, fallenPins);
  }
}

function selectRollDisplayContent2(fallenPins, currentFrame) {
  if (strike(fallenPins)) {
    displayContent = "X";
  } else if (spare(currentFrame) && scorecard.frames[currentFrame].bowls.length < 3) {
    displayContent = "/";
  } else {
    displayContent = fallenPins;
  }

  if (scorecard.frames[currentFrame].bowls.length < 3) {
    updateRollDislay(1, currentFrame, displayContent);
  } else {
    updateRollDislay(2, currentFrame, displayContent);
  }
}

function updateRollDislay(position, currentFrame, displayContent) {
  $("#scorecardTable tr:eq(1) td:eq(" + (currentFrame * 2 + position) + ")").html(
    displayContent
  );
}

function updateGameScoreDisplay(currentFrame) {
  var accumulator = 0;
  for (var i = 0; i < currentFrame + 1; i++) {
    accumulator += scorecard.frameScoreDisplay(i);
    if (scorecard.frameScoreDisplay(i) != null) {
      $("#scorecardTable tr:eq(2) td:eq(" + i + ")").html(accumulator);
    }
  }
}

function gameOver() {
  if (scorecard.gameOver()) {
    $(".button")
      .prop("onclick", null)
      .off("click");
    $("#gameOver")
      .html("<h1>Game Over!</h1>");
    $("#gameOver").html(
      '<h1><a id="playAgain" href="#" onclick="playAgain();return false;">Play Again?</a></h1>'
    );
  }
}

function hide() {
    var div = document.getElementById('gameOver');
    div.style.display = 'none';
}
