$( document ).ready(function( ) {


  let newGame = new BowlingGame();

  roll1Score(null);
  roll2Score(null);
  roll3Score(null);

  $('#submitRoll1').submit(function(event) {
    event.preventDefault();
    let score = $('#rollScore1').val();
    newGame.roll1(score);
    roll1Score(score);
  });

  $('#submitRoll2').submit(function(event) {
    event.preventDefault();
    let score = $('#rollScore2').val();
    newGame.roll2(score);
    roll2Score(score);
  });

  $('#submitRoll3').submit(function(event) {
    event.preventDefault();
    let score = $('#rollScore1').val();
    roll3Score(score);
  });

  function roll1Score(score) {
    if(score === null){
      $("#Roll1Result").text("Ready for Roll 1!");
    } else {
      $("#Roll1Result").text("You scored " + newGame.newScorecard.roll1Score + " for Roll 1!");
    }
  }

  function roll2Score(score) {
    if(score === null){
      $("#Roll2Result").text("Ready for Roll 2!");
    } else {
      $("#Roll2Result").text("You scored " + newGame.newScorecard.roll2Score + " for Roll 2!");
    }
  }

  function roll3Score(score) {
    if(newGame.currentFrame < 10){
      $("#Roll3Result").text(newGame.roll3(score));
    } else if(newGame.currentFrame === 10){
      newGame.roll3(score);
      $("#Roll3Result").text("You scored " + newGame.newScorecard.roll3Score + " for Roll 3!");
    } else {
      $("#Roll3Result").text("potential Roll 3!");
    }
  }



});
