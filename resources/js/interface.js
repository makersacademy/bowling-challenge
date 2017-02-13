$(document).ready(function() {
    var game = new Game();
    updateTotalScore();

    $('#roll').click(function(){
      if(game.nextFrame() === "NEXT FRAME") {
        if (game.isFrameFull()===false){
          addPoints();
          game.addBonusPointsStrike();
          game.addBonusPointsSpare();
        } else {
          game.addFrameToBoard();
        }
      } else if (game.nextFrame() === "BONUS ROLL"){
          //addBonusPoints();
          game.addBonusPointsStrike();
          game.addBonusPointsSpare();
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
