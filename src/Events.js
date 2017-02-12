$(document).ready(function() {

  var game = new Game();

  function refreshScores(){
    // for(var i = 1; i < 21; i++)
    { $('#roll' + (game._currentRoll)).text(game._rolls[game._currentRoll-1]);}
  };

  function resetScores(){
    for(var i = 1; i < 22; i++)
    { $('#roll' + i).empty(); ;}
    $('#totalScore').empty();
  };

    function calculateTotal(){
      $("#totalScore").text(game._totalScore)
    };

    $("#reset").click(function(){
      game.resetGame();
      resetScores();
      resetPins();
    });

    $("#calculateTotalScore").click(function(){
      game.calculateFrameScores();
      calculateTotal();
    });

    $( ".btn" ).click(function() {
      var score = this.id;
      var scorenum = parseInt(score.substr(5));
      game.roll(scorenum);
      refreshScores();
      hideInvalidScores();
    });

    function hideInvalidScores() {
      if(game._currentRoll % 2 !== 0) {
        for(var i = (10 - game._rolls[game._currentRoll -1]) + 1; i < 11; i++)
        { $("#score" + i ).hide(); } }
        else {
        resetPins();
      }
    };

    // function ifStrike(){
    //
    // }

    function resetPins() {
    if(game._currentRoll % 2 === 0) {
      for(var i = 0; i < 11; i++) {
        $( "#score" + i ).show();
      }
    }
  }

});
