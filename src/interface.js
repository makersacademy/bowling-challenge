$(document).ready(function() {
  var scorecard = new Scorecard();

  updateScore();

  $('#enter-rolls').on('click', function(event){
    event.preventDefault();
    let roll1 = Number($("#roll-1").val())
    let roll2 = Number($("#roll-2").val())
    if ((roll1+roll2)> 10){
      alert('Frame score cannot exceed 10 points. Please re-enter.')
    } else {
      scorecard.roll(roll1,roll2)
    }
    updateScore();
    endgame();
  });

  $('#reset-card').on('click', function(){
    if (confirm("Are you sure you want to start a new game? This action cannot be undone.")) { 
      scorecard.newGame();
      updateScore();
      document.getElementById('score').reset();

    }
  });


  function endgame(){
   $('#game-over').text(scorecard.gameOver())
  };

  function updateScore() {
    $('#player-score').text(scorecard.total + " points");
  };
});
