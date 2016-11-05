$(document).ready(function() {
    var game = new Game();
    updateGameScore();

    function updateFrameScore() {
      // okay now this is working for Frame One at least!!!
      if(game.currentFrame.rollsCompleted === 1) {
        $('#frameOneRollOneScore').text(game.currentFrame.rollOneScore);
      }
      else {
        $('#frameOneRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
        $('#frameOneScore').text(game.completedFrames.slice(-1)[0].score);
      }
    }

    function updateGameScore() {
      $('#gameScore').text(game.score);
    }

    $('#0').click(function() {
      game.bowl(0, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#1').click(function() {
      game.bowl(1, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#2').click(function() {
      game.bowl(2, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#3').click(function() {
      game.bowl(3, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#4').click(function() {
      game.bowl(4, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#5').click(function() {
      game.bowl(5, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#6').click(function() {
      game.bowl(6, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#7').click(function() {
      game.bowl(7, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#8').click(function() {
      game.bowl(8, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#9').click(function() {
      game.bowl(9, done);
      updateFrameScore();
      updateGameScore();
    })

    $('#10').click(function() {
      game.bowl(10, done);
      updateFrameScore();
      updateGameScore();
    })
})
