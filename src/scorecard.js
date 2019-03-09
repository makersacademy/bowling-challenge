$( document ).ready(function(){
   game = new Game();
});

function showScores() {
  $( "#totalScore" ).text(game.getTotalScore());
  for (i = 0; i <= game.currentFrame; i++) {
    if (game.currentBowl > 1) {
      f = i + 1
      scoreBoxId = "#frame" + f + "bowl" + 1;
      score = game.frames[i].bowl1;
      $( scoreBoxId ).text(score);
    }
  }
  // TO DO: final frame extra score
}

$( "#save" ).click(function(){
  pins = parseInt(document.getElementById("pins").value);
  game.roll(pins);
  showScores();
});