$(document).ready(function() {
  var game = new Game();

  $( ".btn" ).click(function() {
    var score = this.id;
    var scorenum = parseInt(score.substr(5));
    game.bowl(scorenum);
    updateScores();
    hideInvalidScores();
  });

  function updateScores() {
    for(var i = 1; i<11; i++) {
      $( "#frame-"+i+"-1" ).text(game.frames[i-1].scoreCard[0]);
      $( "#frame-"+i+"-2" ).text(game.frames[i-1].scoreCard[1]);
    }
    finalFrameScore()
    updateTotalScore()
  }

  function hideInvalidScores() {
    if(game.currentFrame.isComplete === false) {
      for(var i = game.currentFrame.standingPins + 1; i < 11; i++) {
        $( "#score"+i ).attr("class","btn invalid");
      }
    } else {
      resetPins();
    }
  }

  function resetPins() {
    if(game.currentFrame.isComplete === true) {
      for(var i = 0; i < 11; i++) {
        $( "#score"+i ).attr("class","btn valid");
      }
    }
  }

  function updateTotalScore() {
    for(var i = 0; i < 10; i++) {
      $( ".frame"+(i+1)+".total" ).text(game.frames[i].getScore());
    }
    $( "#total-score" ).text(game.calcTotalScore());
  }

  function finalFrameScore() {
    if(game.frames[9].bonus !== null) {
      if(game.frames[9].bonus.numberOfBowls === 2) {
        $( "#frame-10-2" ).text(game.frames[9].bonus.scores[0]);
        $( "#frame-10-3" ).text(game.frames[9].bonus.scores[1]);
      } else if (game.frames[9].bonus.numberOfBowls === 1) {
        $( "#frame-10-3" ).text(game.frames[9].bonus.scores[0]);
      }
    }
  }
});
