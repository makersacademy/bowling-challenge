// 'use strict';

$(document).ready(function() {
  var game = new Game();

  for(let num = 0; num<8; num++){
    let name = '#ball' + parseInt(num+1, 10);
    $(name).on('change', function() {
      let score = $(name)[0].value;
      game.recordBall(parseInt(score, 10));
      $(name).attr('readonly', true);
      updateTotals();
    });
  }

  function updateTotals() {
    for(let num = 0; num<8; num++){
      let name = '#frameTotal' + parseInt(num+1, 10);
      if(game.frameList[num]){
        $(name).text("Frame Total: " + game.frameList[num].total);
      }
    }
    $('#gameTotal').text("Game Total: " + game.calculateTotal());
  }

});
