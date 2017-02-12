$(document).ready(function() {
    var game = new Game();
    updateTotalScore();

    $('#roll').click(function(){
      if(game.nextFrame() !== "GAME FINISHED") {
        if (game.isFrameFull()===false){
          game.bowl();
          game.addToFrame();
        } else {
          game.addFrameToBoard();
        }
        showCurrentRoll();
        updateTotalScore();
      };
    });
    $('#reset').click(function(){
      game.playAgain();
      updateTotalScore();
      showCurrentRoll();
    });

    function updateTotalScore() {
        var totalScore = game.returnTotalScore();
        $('#totalscore').text('Total Score:' + totalScore);
    };

    function showCurrentRoll(){
        var roll = game.getRoll();
        var scoreBoard = game.scoreBoard;
        array = scoreBoard + ""
        $('#currentroll').text(roll);
        $('#lastframe').text(array);

    };







});
