$(document).ready(function() {

  var game = new Game();
  var rollCount = 0;

  $('.button-roll').click(function() {
    var pins = parseInt($(this).attr('value'));
      game.addRoll(pins);
      updateRollDisplay(pins);
      updateTotalDisplay();
  });

  function updateTotalDisplay() {
    for(var i = 0; i <= game.totalScore.length; i++ ) {
      $('tr:eq(2) td:eq(' + i + ')').html(game.totalScore[i]);
    }
  }

  function updateRollDisplay(pins) {
    if(pins === 10) { pins = 'X'; }
    if(pins === 'X' && game.totalScore.length < 10) { rollCount++; }
    $('tr:eq(1) td:eq(' + rollCount + ')').html(pins);
    rollCount++;
  }
});
