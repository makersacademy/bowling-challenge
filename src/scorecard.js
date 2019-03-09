$( document ).ready(function(){
   game = new Game();
});

function showScores() {
  $( "#totalScore" ).text(game.getTotalScore());

  // show previous frames
  for (i = 0; i < game.currentFrame; i++) {
    f = i + 1
    scoreBoxId = "#frame" + f + "bowl" + 1;
    bowl1 = game.frames[i].bowl1;
    if (bowl1 == 10) {
      $( scoreBoxId ).text("X");
    } else {
      $( scoreBoxId ).text(bowl1);
      scoreBoxId = "#frame" + f + "bowl" + 2;
      bowl2 = game.frames[i].bowl2;
      if (bowl1 + bowl2 == 10) {
        $( scoreBoxId ).text("/");
      } else {
        $( scoreBoxId ).text(bowl2);
      }
    }
  }

  // show current frame
  if (game.currentBowl > 1) {
    f = game.currentFrame + 1;
    scoreBoxId = "#frame" + f + "bowl" + 1;
    bowl1 = game.frames[game.currentFrame].bowl1;
    if (bowl1 == 10) {
      $( scoreBoxId ).text("X");
    } else {
      $( scoreBoxId ).text(bowl1);
    }
  }

  if (game.currentBowl > 2) {
    f = game.currentFrame + 1;
    scoreBoxId = "#frame" + f + "bowl" + 2;
    bowl2 = game.frames[game.currentFrame].bowl2;
    if (bowl1 + bowl2 == 10) {
      $( scoreBoxId ).text("/");
    } else {
      $( scoreBoxId ).text(bowl1);
    }
  }

  // show 3rd bowl of last frame
}

$( "#save" ).click(function(){
  pins = parseInt(document.getElementById("pins").value);
  game.roll(pins);
  showScores();
});