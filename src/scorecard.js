$( document ).ready(function(){
   game = new Game();
});

function showScores() {
  $( "#totalScore" ).text(game.getTotalScore());
  showPastFramesScores();
  showCurrentFrame()
  showFinalFrame()
}

function showPastFramesScores() {
  for (i = 0; i < game.currentFrame; i++) {
    displayScoreForFrame(i + 1)
    displayBowl1ForFrame(i + 1)
    displayBow12ForFrame(i + 1)
  }
}

function showCurrentFrame() {
  if (game.currentBowl > 1) {
    displayBowl1ForFrame(game.currentFrame + 1)
  }
}

function showFinalFrame() {
  if (game.gameOver) {
    displayScoreForFrame(10);
  }
  if (game.currentBowl > 2 || game.gameOver) {
    displayBowl2ForFinalFrame()
  }
  if (game.gameOver && game.frames[9].thirdBowlAllowed) {
    displayBowl3ForFinalFrame()
  }
}

function scoreOrStrike(bowl) {
 return isStrike(bowl) ? "X" : bowl
}

function scoreOrSpare(bowl1, bowl2) {
  return isSpare(bowl1, bowl2) ? "/" : bowl2
}

function isStrike(bowl) {
  return (bowl == 10) ? true : false 
}

function isSpare(bowl1, bowl2) {
  return (bowl1 + bowl2 == 10) ? true : false
}

function displayScoreForFrame(frame) {
  scoreBoxId = "#score" + frame;
  frameScore = game.frames[frame - 1].getTotal();
  $( scoreBoxId ).text(frameScore);
}

function displayBowl1ForFrame(frame) {
  scoreBoxId = "#frame" + frame + "bowl" + 1;
  bowl1 = game.frames[frame - 1].bowl1;
  $( scoreBoxId ).text(scoreOrStrike(bowl1));
}

function displayBow12ForFrame(frame) {
  bowl1 = game.frames[frame - 1].bowl1;
  if (!isStrike(bowl1)) {
    scoreBoxId = "#frame" + frame + "bowl" + 2;
    bowl2 = game.frames[frame - 1].bowl2;
    $( scoreBoxId ).text(scoreOrSpare(bowl1, bowl2));
  }
}

function displayBowl2ForFinalFrame() {
  scoreBoxId = "#frame" + 10 + "bowl" + 2;
  bowl1 = game.frames[9].bowl1;
  bowl2 = game.frames[9].bowl2;
  score = isSpare(bowl1, bowl2) ? "/" : scoreOrStrike(bowl2)
  $( scoreBoxId ).text(score);
}

function displayBowl3ForFinalFrame() {
  scoreBoxId = "#frame" + 10 + "bowl" + 3;
  bowl3 = game.frames[9].bonus;
  $( scoreBoxId ).text(scoreOrStrike(bowl3)); // TO DO - if 10, 5, 5 it should display /
}

$( "#save" ).click(function(){
  pins = parseInt(document.getElementById("pins").value);
  game.roll(pins);
  showScores();
});