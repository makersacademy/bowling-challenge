$(document).ready(function () {

  function updateTurnMessage() {
    $('#current-frame').text(game.currentFrameNumber());
    $('#current-roll').text(game.currentFrameObject().currentRollNumber());
  };

  function validInput(pins) {
    if (pins === "") {
      $('.message').text("Please input your score.");
      return false;
    } else if (!!pins.match(/[^0-9]/)) {
        $('.message').text("Please input an integer.");
        return false;
    } else if (parseInt(pins) > 10) {
        $('.message').text("There are only 10 pins to knock over, please check the score and try again.");
        return false;
    } else if (parseInt(pins) + game.currentFrameObject().pinsKnocked() > 10 &&
               game.currentFrameNumber() < 10) {
        $('.message').text("Only ten pins can be knocked over in a frame, please check the score and try again.");
        return false;
    } else {
        return true;
    };
  };

  function advanceGame() {
    if (game.currentFrameNumber() < 10) {
      if (game.currentFrameObject().currentRollNumber() > 2) {
        game.updateScore();
        game.newFrame(new Frame());
      } else if (game.currentFrameObject().isStrike() === true) {
        game.updateScore();
        game.newFrame(new Frame());
      }
    } else {
      if (game.currentFrameObject().currentRollNumber() > 3) {
        game.updateScore();
        gameOver();
      } else if (game.currentFrameObject().currentRollNumber() === 3 &&
                 !(game.currentFrameObject().isStrike() || game.currentFrameObject().isSpare())) {
        game.updateScore();
        gameOver();
      }
    }
  };

  function updateTable() {
    var frames = game.getFrames();
    frames.forEach((frame, frameIndex) => {
      var rolls = frame.getRolls();
      if (rolls.length !== 0) {
        rolls.forEach((roll, rollIndex) => {
          console.log("frame "+(frameIndex + 1)+" roll "+(rollIndex + 1));
          console.log(roll);
          $('#f'+(frameIndex + 1)+'r'+(rollIndex + 1)).text(roll);
        });
        console.log("frame "+(frameIndex + 1));
        console.log(frame.getTotalScore());
        $('#f'+(frameIndex + 1)+'total').text(frame.getTotalScore());
      };
    });
  };

  function gameOver() {
    $('#turn_message').text("Game Over!")
    $('#current_pins').hide();
    $('#submit_current_pins').hide();
  }

  function updateTotal() {
    $('#total_score').text(game.getRunningScore());
  };

  let game = new Game();
  game.newFrame(new Frame());
  updateTurnMessage();

  $('#submit_current_pins').on('click', function() {
    var input = $('#current_pins').val();
    $('#current_pins').val("");
    $('.message').text("");
    if (validInput(input)) {
      game.knocked(parseInt(input));
      advanceGame();
      updateTurnMessage();
      updateTable();
      updateTotal();
    };
  });


});
