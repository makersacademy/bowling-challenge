// 'use strict';

$(document).ready(function() {
  var game = new Game();

  for(let num = 0; num<20; num++){
    let name = '#ball' + parseInt(num+1, 10);
    $(name).on('change', function() {
      let score = $(name)[0].value;
      game.recordBall(parseInt(score, 10));
      // updateMessage(num);
      updateReadOnly(name, num, parseInt(score, 10))
      updateTotals();
    });
  }

  function updateTotals() {
    for(let num = 0; num<20; num++){
      let name = '#frameTotal' + parseInt(num+1, 10);
      if(game.frameList[num]){
        $(name).text("Frame Total: " + game.frameList[num].total);
      }
    }
    $('#gameTotal').text("Game Total: " + game.calculateTotal());
  }

  function updateReadOnly(name, number, score) {
    $(name).attr('readonly', true);
    let nextName = '#ball' + parseInt(number+2, 10);
    if(score === 10)
    {
      $(nextName).attr('readonly', true).css("background-color","paleblue");
      // $(nextName).attr('tabindex', '-1');
    }
  }

  // function updateMessage(number) {
  //   message = game.getFrameMessage(number);
  //   $('#message' + parseInt(number+1, 10)).text(message);
  // }

});
