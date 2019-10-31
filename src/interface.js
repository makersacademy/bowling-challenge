$(document).ready(function() {
  var scorecard = new Scorecard();

  updateScore();

  $('#enter-rolls').on('click', function(event){
    event.preventDefault();
    let roll1 = Number($("#roll-1").val())
    let roll2 = Number($("#roll-2").val())
    if(scorecard.frame ===9) {
      scorecard.roll10(roll1,roll2)
      updateScore();
    } else if(scorecard.frame ===10) {
      document.getElementById("roll-1").style.display="none";
      document.getElementById("roll-2").style.display="none";
      document.getElementById("roll-3").style.display="block";
      scorecard.roll11(roll1)
      updateScore();
    } else if(scorecard.frame ===12){
      document.getElementById("enter-rolls").disabled = true;
    }
      else if ((roll1+roll2)> 10 && scorecard.frame < 10){
        alert('Frame score cannot exceed 10 points. Please re-enter.')
        document.getElementById('score').reset();
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
      clearScore();
      document.getElementById("roll-1").style.display="block";
      document.getElementById("roll-2").style.display="block";
      document.getElementById("roll-3").style.display="none";
    }
  });

  function clearScore(){
    document.getElementById('score').reset();
  }

  function endgame(){
    $('#game-over').text(scorecard.gameOver());
     
  };

  function updateScore() {
    $('#player-score').text(scorecard.total + " points");
  };
});
