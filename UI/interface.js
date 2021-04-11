$( document ).ready(function( ) {


  let newGame = new BowlingGame();



  roll1Score(null);
  roll2Score(null);
  roll3Score(null);
  totalResult();
  bonusResult();
  rollsResult();

  $('#submitRoll1').submit(function(event) {
    event.preventDefault();
    let score = $('#rollScore1').val();
    newGame.roll1(score);
    roll1Score(score);
    rollsResult();
  });

  $('#submitRoll2').submit(function(event) {
    event.preventDefault();
    let score = $('#rollScore2').val();
    newGame.roll2(score);
    roll2Score(score);
    totalResult();
    bonusResult();
    rollsResult();
    // console.log(newGame.newScorecard.scorecard[newGame.currentFrame - 2][`frame${newGame.currentFrame-1}`]["bonus"]);
  });

  $('#submitRoll3').submit(function(event) {
    event.preventDefault();
    let score = $('#rollScore1').val();
    roll3Score(score);
    totalResult();
    bonusResult();
    endOfGame();
  });

  function roll1Score(score) {
    if(score === null){
      $("#Roll1Result").text("Ready for Roll 1!");
    } else {
      $("#Roll1Result").text(newGame.roll1(score));
    }
  }

  function roll2Score(score) {
    if(score === null){
      $("#Roll2Result").text("Ready for Roll 2!");
    } else {
      $("#Roll2Result").text(newGame.roll2(score));
    }
    frame();
  }

  function roll3Score(score) {
    if(newGame.currentFrame < 10){
      $("#Roll3Result").text(newGame.roll3(score));
    } else if(newGame.currentFrame === 10){
      newGame.roll3(score);
      $("#Roll3Result").text("Roll 3 complete!");
    } else {
      $("#Roll3Result").text("potential Roll 3!");
    }
  }

  function frame(){
    $("#frame").text("Frame " + newGame.currentFrame);
  }

  function totalResult(){
    $("#totalResult").text("Your total so far " + newGame.newScorecard.totalGameScore);
  }

  function bonusResult(){
    $("#bonusResult").text("Your bonus for this frame: " + newGame.newScorecard.bonusScore);
  }

  function rollsResult(){
    $("#rollsResult").text("Roll 1: " + newGame.newScorecard.roll1Score + " | Roll 2: " + newGame.newScorecard.roll2Score);
  }

  function endOfGame(){
    $("#Roll1Result").text("End");
    $("#Roll2Result").text("of");
    $("#Roll3Result").text("game!");
  }

});
