// 'use strict';

$(document).ready(function() {
  controller = new Controller();

  for(let num = 0; num<20; num++) {
    let name = '#ball' + parseInt(num+1, 10);
    $(name).on('change', function() {
      let score = $(name)[0].value;
      valid = validateInput(score, num);
      if (valid !== false) {
        controller.addBall(parseInt(score, 10));
        controller.updateDOM(name, num, score);
        // updateReadOnly(name, num, parseInt(score, 10))
        // updateTotals();
      }
    });
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
