// 'use strict';

$(document).ready(function() {
  // var game = new Game();
  controller = new Controller();

  for(let num = 0; num<20; num++) {
    let name = '#ball' + parseInt(num+1, 10);
    $(name).on('change', function() {
      let score = $(name)[0].value;
      valid = validateInput(score, num);
      if (valid !== false) {
        controller.addBall(parseInt(score, 10));
        updateReadOnly(name, num, parseInt(score, 10))
        updateTotals();
      }
    });
  }

  function updateTotals() {
    for(let num = 0; num<20; num++){
      let name = '#frameTotal' + parseInt(num+1, 10);
      console.log(controller.frameTotals())
      if(controller.frameTotals()[num]){
        $(name).text("Frame Total: " + controller.frameTotals()[num]);
      }
    }
    $('#gameTotal').text("Game Total: " + controller.totalScore());
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

  function validateInput(score, num) {
    if(score > 10) {
      alert("Score cannot be more than 10");
      return false;
    }

  }

  // function updateMessage(number) {
  //   message = game.getFrameMessage(number);
  //   $('#message' + parseInt(number+1, 10)).text(message);
  // }

});
