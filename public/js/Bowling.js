$(function() {

  var game = new Game;
  var amount = 10;

  $("#new_game").click(function(){
    game = new Game;
    clearScores();
  });

  $("button#bowl").click(function() {
    amount = parseInt(this.value);
    game.bowl(amount);
    updateScores();
    setButtons();
  });

  function updateScores(){
    for (var i = 0; i < game.frames.length; i++){
      var frame = game.frames[i];
      var frameElement = $("#sc #frame:nth-child(" + (i+1) + ")");
      if (!(frame.score === undefined)) {
        $(frameElement).find("#score").text(game.currentScore(i+1));
      }
      if (i === 9){
        for (var j = 0; j < frame.rollScores.length; j++) {
          var scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "X"];
          $(frameElement).find("#ball"+(j+1)).text(scores[frame.rollScores[j]]);
          if (frame.isSpare()){ $(frameElement).find("#ball2").text("/"); }
        }
        return;
      }
      if (frame.isStrike && i !== 9){
        $(frameElement).find("#ball2").text("X");
      } else {
        $(frameElement).find("#ball1").text(frame.rollScores[0]);
        if (frame.rollScores.length >= 2) {
          if (frame.isSpare()) {
            $(frameElement).find("#ball2").text("/");
          } else {
            $(frameElement).find("#ball2").text(frame.rollScores[1]);
          }
        }
      }
    }
  }

  function setButtons(){
    if (game.currentFrame().isComplete){ return $("button#bowl").removeClass("disabled"); }
    for (var j = 10 - amount; j < 12; j++) {
      $("#bowls button:nth-child(" + (j+2) + ")").addClass("disabled");
    }
  }

  function clearScores(){
    $("button#bowl").removeClass("disabled");
    $("#ball1, #ball2, #ball3, #score").html("");
  }


});
