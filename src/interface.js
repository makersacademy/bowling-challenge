$(document).ready(function() {
  var game = new Game();

  $( ".btn" ).click(function() {
    var score = this.id;
    var scorenum = score.substr(5);
    game.bowl(scorenum);
    updateScores();
    hideInvalidScores();
  });

  function updateScores() {
    for(var i = 1; i<11; i++) {
      $( "#frame-"+i+"-1" ).text(game.frames[i-1].scoreCard[0]);
      $( "#frame-"+i+"-2" ).text(game.frames[i-1].scoreCard[1]);
    }
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

});
