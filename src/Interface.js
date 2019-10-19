$(document).ready(() => {

  let game = new Game;

  function updateCurrentStage() {
    // Load the current frame and roll number
    $('#current-frame').text(game.getCurrentFrame());
    $('#current-roll').text(game.getCurrentRoll());
  }

  updateCurrentStage();

  $('#player-action').submit(function(event) {
    event.preventDefault();
    let knocks = $('#player-knocks').val();
    game.play(knocks);
    updateCurrentStage();
  });

  // Load the empty frames

});
