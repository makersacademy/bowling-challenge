$(document).ready(function() {
    var game = new Game();
    updateTotalScore();

    $('#roll').click(function(){
      if(game.nextFrame() === "NEXT FRAME") {
        if (game.isFrameFull()===false){
          addPoints();
        } else {
          game.addFrameToBoard();
        }
      } else if (game.nextFrame() === "BONUS ROLL"){
          addBonusPoints();
          console.log("I'M HERE");
          game.bonusRollTaken();
      }
      showCurrentRoll();
      updateTotalScore();
    });
    $('#reset').click(function(){
      game.playAgain();
      updateTotalScore();
      showCurrentRoll();
    });

    function updateTotalScore() {
        var totalScore = game.returnTotalScore();
        $('#totalscore').text('Total Score:' + totalScore);
    }

    function showCurrentRoll(){
        var roll = game.getRoll();
        var scoreBoard = game.scoreBoard;
        var array = scoreBoard + ""
        $('#currentroll').text(roll);
        $('#lastframe').text(array);

    }

    function addPoints(){
      game.bowl()
      game.addToFrame()
    }

    function addBonusPoints(){
      game.bowl();
      game.assignFinalBonus();
    }


});
