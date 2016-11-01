$(document).ready(function() {
    var game = new Game();
    updateGameScore();

    function updateGameScore() {
      $('#gameScore').text(game.score);
    }

// Cannot get this bloody function to work
    // function updateFrameScore() {
    //
    //   switch(game.frameNumber) {
    //
    //     case 1:
    //       if(game.currentFrame.rollNumber === 1) {
    //         $('#frameOneRollOneScore').text(game.currentFrame.rollOneScore);
    //       }
    //       else {
    //         $('#frameOneRollTwoScore').text(game.currentFrame.rollTwoScore);
    //         $('#frameOneScore').text(game.currentFrame.score);
    //       }
    //       break;
    //   }
    // }

    $('#0').click(function() {
      game.bowl(0);
      updateFrameScore();
      updateGameScore();
    })

    $('#1').click(function() {
      game.bowl(1);
      updateFrameScore();
      updateGameScore();
    })

    $('#2').click(function() {
      game.bowl(2);
      updateFrameScore();
      updateGameScore();
    })

    $('#3').click(function() {
      game.bowl(3);
      updateFrameScore();
      updateGameScore();
    })

    $('#4').click(function() {
      game.bowl(4);
      updateFrameScore();
      updateGameScore();
    })

    $('#5').click(function() {
      game.bowl(5);
      updateFrameScore();
      updateGameScore();
    })

    $('#6').click(function() {
      game.bowl(6);
      updateFrameScore();
      updateGameScore();
    })

    $('#7').click(function() {
      game.bowl(7);
      updateFrameScore();
      updateGameScore();
    })

    $('#8').click(function() {
      game.bowl(8);
      updateFrameScore();
      updateGameScore();
    })

    $('#9').click(function() {
      game.bowl(9);
      updateFrameScore();
      updateGameScore();
    })

    $('#10').click(function() {
      game.bowl(10);
      updateFrameScore();
      updateGameScore();
    })
})
