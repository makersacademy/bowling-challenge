$(document).ready(function(){
  var game = new Game;
  updateScore();

  $('#roll-a-1').on('click',function(){
    game.makeRoll(1);
    updateScore();
  })

  $('#roll-a-2').on('click',function(){
    game.makeRoll(2);
    updateScore();
  })

  $('#roll-a-2').on('click',function(){
    game.makeRoll(2);
    updateScore();
  })

  $('#roll-a-3').on('click',function(){
    game.makeRoll(3);
    updateScore();
  })

  $('#roll-a-4').on('click',function(){
    game.makeRoll(4);
    updateScore();
  })

  $('#roll-a-5').on('click',function(){
    game.makeRoll(5);
    updateScore();
  })

  $('#roll-a-6').on('click',function(){
    game.makeRoll(6);
    updateScore();
  })

  $('#roll-a-7').on('click',function(){
    game.makeRoll(7);
    updateScore();
  })

  $('#roll-a-8').on('click',function(){
    game.makeRoll(8);
    updateScore();
  })

  $('#roll-a-9').on('click',function(){
    game.makeRoll(9);
    updateScore();
  })

  $('#roll-a-10').on('click',function(){
    game.makeRoll(10);
    updateScore();
  })
  function updateScore () {
    $('#total-score').text(game.getScore());
    if (game.frameNo === 1 && game.rollCount === 1)
      $('#f1r1').on()
  }


})
