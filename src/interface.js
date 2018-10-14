$(document).ready(function() {
  var game = new Game();
  var currentFrame = '';

  $('#submit-btn').click(function() {
    let frameValue = $('#frame').val();
    let rollValue = $('#roll').val();
    let pinsValue = $('#pins').val();
    $('#' + frameValue + '-' + rollValue +  '-' + 'pins').text(pinsValue);
    updateFrame(frameValue,rollValue)
    updateTotalScore();
  });

  function updateFrame(frameValue,rollValue) {
    if (rollValue === 1) {
      var currentFrame = new Frame(rollValue)
      game.addFrame(currentFrame)
    } else {
      game.frames[frameValue - 1].addRoll(rollValue);
    }
   };

   function updateTotalScore() {
      let totalScore = game.currentGameScore();
      $('#total-score').text(totalScore);
   };
});
