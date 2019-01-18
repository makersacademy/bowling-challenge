updateTotals = function(game) {
  for (var i = 1; i<11; i++) {
    $(`#total-${i}`).text(game.frames[i-1].total);
  }
  $(`#grand-total`).text(game.total());
};

updateSelected = function(game) {
  var index = game.frames.indexOf(game.currentFrame());
  $(`#frame-${index+1}`).addClass('selected');
  $(`#frame-${index}`).removeClass('selected');
};

updateComplete = function(game) {
  if (game.isComplete()) {
    $('#complete-message').text(`Game Complete: your total score was ${game.total()}`);
  }
};

updateDisplay = function(game) {
  updateTotals(game);
  updateSelected(game);
  updateComplete(game);
};

processRoll = function(game) {
  var value = Number($("#score-input").val());
  if (game.currentFrame().accepts(value)) {
    game.roll(value);
    $("#value-error").hide();
  } else {
    $("#value-error").show();
  }
  updateDisplay(game);
};

$(document).ready(function() {
  var game = new Game();
  updateDisplay(game);
  $("#score-form").submit(function(event) {
    event.preventDefault();
    processRoll(game);
  });
  $("#restart-game").submit(function(event) {
    event.preventDefault();
    game = new Game();
    updateDisplay(game);
  });
});
