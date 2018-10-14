$(document).ready(function() {
  var game = new Game();

  $('#submit-btn').click(function() {
    let frameValue = $('#frame').val();
    let rollValue = $('#roll').val();
    let pinsValue = $('#pins').val();
    $('#' + frameValue + '-' + rollValue +  '-' + 'pins').text(pinsValue);
    updateFrame(frameValue, rollValue, pinsValue);
    updateTotalScore();
  });

  function updateFrame(frameValue, rollValue, pinsValue) {
    let pinsInteger = parseInt(pinsValue)
    if (rollValue === '1') {
      var currentFrame = new Frame(pinsInteger);
      game.addFrame(currentFrame);
    } else {
      game.frames[frameValue - 1].addSecondRoll(pinsInteger);
    };
   };

   function updateTotalScore() {
      let totalScore = game.currentGameScore();
      $('#total-score').text(totalScore);
   };
});
