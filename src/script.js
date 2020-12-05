$(document).ready(function () {

  function updateTurnMessage() {
    $('#current-frame').text(game.currentFrameNumber());
    $('#current-roll').text(game.currentFrameObject().currentRollNumber());
  };

  function validInput(pins) {
    if (!!pins.match(/[^0-9]/)) {
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
        game.newFrame(new Frame());
      } else if (game.currentFrameObject().isStrike() === true) {
        game.newFrame(new Frame());
      };
    };
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
    };
  });


});
