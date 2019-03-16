$( document ).ready(function(){
   game = new Game();
});

function showScores() {
  $( "#totalScore" ).text(game.getTotalScore());
  showPastFramesScores();

  // show current frame
  if (game.currentBowl > 1) {
    displayBowl1ForFrame(game.currentFrame + 1)
  }

  // show final frame
  if (game.gameOver) {
    displayScoreForFrame(10);
  }

  if (game.currentBowl > 2 || game.gameOver) {
    f = game.currentFrame + 1;
    scoreBoxId = "#frame" + f + "bowl" + 2;
    bowl2 = game.frames[game.currentFrame].bowl2;
    score = isSpare(bowl1, bowl2) ? "/" : scoreOrStrike(bowl2)
    $( scoreBoxId ).text(score);
  }

  if (game.gameOver && game.frames[game.currentFrame].thirdBowlAllowed) {
    f = game.currentFrame + 1;
    scoreBoxId = "#frame" + f + "bowl" + 3;
    bowl3 = game.frames[game.currentFrame].bonus;
    $( scoreBoxId ).text(scoreOrStrike(bowl3)); // TO DO - if 10, 5, 5 it should display /
  }
}

function showPastFramesScores() {
  for (i = 0; i < game.currentFrame; i++) {
    displayScoreForFrame(i + 1)
    displayBowl1ForFrame(i + 1)
    displayBow12ForFrame(i + 1)
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

$( "#save" ).click(function(){
  pins = parseInt(document.getElementById("pins").value);
  game.roll(pins);
  showScores();
});