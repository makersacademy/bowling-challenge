$(document).ready(function(){
  var game = new Game;
  updateScore();

  $('#roll-a-0').on('click',function(){
    game.makeRoll(0);
    updateScore();
  })

  $('#roll-a-1').on('click',function(){
    game.makeRoll(1);
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

  $('#reset').on('click', function(){
    game.reset();
    $('.rolls').text('');
    $('.frames').text('');
    updateScore();
  })

  function updateScore () {
    $('#total-score').text(game.score);
    roll = game.rollCount;
    $('#r' + roll).text(game.rollHistory[roll -1]);
    frame = game.frameNo -1;
    $('#f' + frame).text(game.frameScores[frame - 1]);
  }

})
