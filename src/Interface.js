function game(){
  game = new Game;
}

$(document).ready(function(){
  game();
  updateScore();

  $('#pin_reset').click(function() {
    game.reset();
    $('.rolls').text('');
    $('.frames').text('');
    updateScore();
  });

  $('#pinHit_0').click(function() {
    game.makeRoll(0);
    updateScore();
  });

  $('#pinHit_1').click(function() {
    game.makeRoll(1);
    updateScore();
  });

  $('#pinHit_2').click(function() {
    game.makeRoll(2);
    updateScore();
  });

  $('#pinHit_3').click(function() {
    game.makeRoll(3);
    updateScore();
  });

  $('#pinHit_4').click(function() {
    game.makeRoll(4);
    updateScore();
  });

  $('#pinHit_5').click(function() {
    game.makeRoll(5);
    updateScore();
  });

  $('#pinHit_6').click(function() {
    game.makeRoll(6)
    updateScore();
  });

  $('#pinHit_7').click(function() {
    game.makeRoll(7);
    updateScore();
  });

  $('#pinHit_8').click(function() {
    game.makeRoll(8);
    updateScore();
  });

  $('#pinHit_9').click(function() {
    game.makeRoll(9);
    updateScore();
  });

  $('#pinHit_10').click(function() {
    game.makeRoll(10);
    updateScore();
  });

  function updateScore() {
    $('#total-score').text(game.score);
    roll = game.rollCount;
    if (game.frameNo > 1 && game.isWhichRoll() === 2 && game.tallyLast() === 10){
      $('#r' + roll).text('/');
    } else if (game.rollHistory.slice(-1)[0] === 10) {
      $('#r' + roll).text('X');
    } else {
      $('#r' + roll).text(game.rollHistory[roll -1]);
    }
    frame = game.frameNo -1;
    // update frame before if needed
    // if was strike
    if (game.literalRollCount >= 3 && game.wasStrike()){
      // if strike strike strike
      if (game.literalRollHistory.slice(-3)[0] === 10 && game.literalRollHistory.slice(-3)[1] === 10 && game.literalRollHistory.slice(-3)[2] === 10){
         $('#f' + (frame - 2)).text(game.frameScores[frame - 3]);
      } else {
        $('#f' + (frame - 1)).text(game.frameScores[frame - 2]);
      }
    }
    $('#f' + frame).text(game.frameScores[frame - 1]);
  };

});