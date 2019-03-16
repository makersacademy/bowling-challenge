$( document ).ready(function(){
   game = new Game();
});

function showScores() {
  $( "#totalScore" ).text(game.getTotalScore());
  showPastFramesScores();

  // show current frame
  if (game.currentBowl > 1) {
    f = game.currentFrame + 1;
    scoreBoxId = "#frame" + f + "bowl" + 1;
    bowl1 = game.frames[game.currentFrame].bowl1;
    $( scoreBoxId ).text(scoreOrStrike(bowl1));
  }

  // show final frame
  if (game.gameOver) {
    scoreBoxId = "#score10";
    frameScore = game.frames[9].getTotal();
    $( scoreBoxId ).text(frameScore);
  }

  if (game.currentBowl > 2 || game.gameOver) {
    f = game.currentFrame + 1;
    scoreBoxId = "#frame" + f + "bowl" + 2;
    bowl2 = game.frames[game.currentFrame].bowl2;
    if (bowl1 + bowl2 == 10) {
      $( scoreBoxId ).text("/");
    } else {
      $( scoreBoxId ).text(scoreOrStrike(bowl2));
    }
  }

  if (game.gameOver && game.frames[game.currentFrame].thirdBowlAllowed) {
    f = game.currentFrame + 1;
    scoreBoxId = "#frame" + f + "bowl" + 3;
    bowl3 = game.frames[game.currentFrame].bonus;
    $( scoreBoxId ).text(scoreOrStrike(bowl3));
  }
}

function showPastFramesScores() {
  for (i = 0; i < game.currentFrame; i++) {
    // frame score
    f = i + 1
    scoreBoxId = "#score" + f;
    frameScore = game.frames[i].getTotal();
    $( scoreBoxId ).text(frameScore);
    // bowl 1 score
    scoreBoxId = "#frame" + f + "bowl" + 1;
    bowl1 = game.frames[i].bowl1;
    $( scoreBoxId ).text(scoreOrStrike(bowl1));
    //bowl2 score
    if (!isStrike(bowl1)) {
      scoreBoxId = "#frame" + f + "bowl" + 2;
      bowl2 = game.frames[i].bowl2;
      $( scoreBoxId ).text(scoreOrSpare(bowl1, bowl2));
    }
  }
}

function scoreOrStrike(bowl) {
 return isStrike(bowl) ? "X" : bowl
}

function scoreOrSpare(bowl1, bowl2) {
  return (bowl1 + bowl2 == 10) ? "/" : bowl2
}

function isStrike(bowl) {
  return (bowl == 10) ? true : false 
}

$( "#save" ).click(function(){
  pins = parseInt(document.getElementById("pins").value);
  game.roll(pins);
  showScores();
});