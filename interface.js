$(document).ready(function() {
  var game = new Game();
  var boardRowIndex = 1;

  function isEven(number) {
    if (number % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  function performRoll(numPins) {
    if (game.isOver() === true) {
      alert("Game over! Click on 'Reset' to play again");
      return;
    };

    game.roll(numPins);
    $(`#r${boardRowIndex}`).text(numPins);

    if (numPins === 10) { boardRowIndex += 1; }

    if (isEven(boardRowIndex) === true) {
      $(`#r${boardRowIndex}total`).text(game.rollScore());
    }
    boardRowIndex += 1;
  }

  $('#roll-0').click(function() { performRoll(0); });
  $('#roll-1').click(function() { performRoll(1); });
  $('#roll-2').click(function() { performRoll(2); });
  $('#roll-3').click(function() { performRoll(3); });
  $('#roll-4').click(function() { performRoll(4); });
  $('#roll-5').click(function() { performRoll(5); });
  $('#roll-6').click(function() { performRoll(6); });
  $('#roll-7').click(function() { performRoll(7); });
  $('#roll-8').click(function() { performRoll(8); });
  $('#roll-9').click(function() { performRoll(9); });
  $('#roll-10').click(function() { performRoll(10); });

  $('#reset').click(function(){
    game = new Game();
    boardRowIndex = 1;
    $('td').text('');
  });

});
