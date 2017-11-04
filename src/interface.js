$( document ).ready(function() {
  var game = new Game();
  var rollValueTextInput = $('#rollValue');
  var enterRollValueButton = $('#enterRollValue');
  var totalScoreDisplay = $('#totalScore');
  enterRollValueButton.on('click', function() {
    var rollValue = parseInt(rollValueTextInput.val());
    game.addRoll(rollValue);
    totalScoreDisplay.text(game.totalScore());
    rollValueTextInput.val('');
    rollValueTextInput.focus();
  })
});
