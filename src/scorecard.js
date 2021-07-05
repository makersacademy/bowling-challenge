$( document ).ready(function(){
   game = new Game();
});

function showScores() {
  $( "#totalScore" ).text(game.getTotalScore());
  showFrameScores();
  showCurrentFrame()
  showFinalFrame()
}

function showFrameScores() {
  for (i = 1; i <= game._currentFrameNumber; i++) {
    displayScoreForFrame(i)
    display_frameRoll1Score(i)
    display_frameRoll2Score(i)
  }
}

function showCurrentFrame() {
    display_frameRoll1Score(game._frames[game._frames.length-1]._frameRoll1Score + 1)
}

function showFinalFrame() {
  if ((game._frames[game._frames.length-1]._finalFrame === true) && (game._frames[game._frames.length-1]._rollNumber => 3) && ((!game._frames[game._frames.length-1]._spare) || (!game._frames[game._frames.length-1]._strike))) {
    displayScoreForFrame(10);
  }
  if ((game._frames[game._frames.length-1]._finalFrame === true) && (game._frames[game._frames.length-1]._rollNumber <= 2) && ((game._frames[game._frames.length-1]._spare) || (game._frames[game._frames.length-1]._strike))) {
    display_frameRoll2Score()
  }
  if ((game._frames[game._frames.length-1]._finalFrame === true) && (game._frames[game._frames.length-1]._rollNumber => 3) && ((game._frames[game._frames.length-1]._spare) || (game._frames[game._frames.length-1]._strike))) {
    display_frameRoll3Score()
  }
}

function scoreOrStrike(roll) {
 return isStrike(roll) ? "X" : roll
}

function scoreOrSpare(roll1, roll2) {
  return isSpare(roll1, roll2) ? "/" : roll2
}

function isStrike(roll) {
  return (roll == 10) ? true : false
}

function isSpare(roll1, roll2) {
  return (roll1 + roll2 == 10) ? true : false
}

function displayScoreForFrame(frame) {
  boxId = "#score" + frame;
  frameScore = game._frames[game._frames.length-1].totalScoreForFrame();
  $( boxId ).text(frameScore);
}

function displayBowl1ForFrame(frame) {
  boxId = "#frame" + frame + "roll" + 1;
  roll1 = game._frames[game._frames.length-1]._frameRoll1Score;
  $( boxId ).text(scoreOrStrike(roll1));
}

function displayBow12ForFrame(frame) {
  roll1 = game._frames[frame - 1]._frameRoll1Score;
  if (!isStrike(bowl1)) {
    boxId = "#frame" + frame + "roll" + 2;
    roll2 = game._frames[game._frames.length-1]._frameRoll2Score;
    $( boxId ).text(scoreOrSpare(roll1, roll2));
  }
}

function displayBowl2ForFinalFrame() {
  boxId = "#frame" + 10 + "roll" + 2;
  roll1 = game._frames[10]._frameRoll1Score;
  roll2 = game._frames[10]._frameRoll2Score;
  score = isSpare(roll1, roll2) ? "/" : scoreOrStrike(roll2)
  $( boxId ).text(score);
}

function displayBowl3ForFinalFrame() {
  boxId = "#frame" + 10 + "roll" + 3;
  roll3 = game._frames[10]._frameRoll3Score;
  $( boxId ).text(scoreOrStrike(roll3));

$( "#save" ).click(function(){
  pins = parseInt(document.getElementById("pins").value);
  game.roll(pins);
  showScores();
});
