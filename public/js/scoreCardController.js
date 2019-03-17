"use strict";

$(document).ready(function() {
  var game = new Frame();

  $('.roll1').on('change', function() {
    var row = $(this).closest('tr');
    var score1 = parseInt(this.value);
    var frame = row.find('.frameNumber').text()
    game.roll1(frame, score1)
    var special = null
    if (score1 == 10) {
      special = 'Strike'
    }
    row.find('.specialRoll').text(special)
  });

  $('.roll2').on('change', function() {
    var row = $(this).closest('tr');
    var score2 = parseInt(this.value);
    var frame = row.find('.frameNumber').text()
    game.roll2(frame, score2)
    game.sumTotal(frame)
    row.find('.total').text(game.scoreCard[frame - 1]['total'])
  });

})
